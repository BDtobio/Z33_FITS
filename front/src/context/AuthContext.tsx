"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";
import { IUser } from "@/interfaces/IUser";
import { IAuthContext, ILoginRequest, IRegisterRequest } from "@/interfaces/IAuth";

const AuthContext = createContext<IAuthContext | undefined>(undefined);

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  /* -----------------------------------------
      CARGAR SESIÓN DESDE LOCALSTORAGE
  -----------------------------------------*/
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");
    const savedAdmin = localStorage.getItem("admin");

    if (savedToken) setToken(savedToken);
    if (savedAdmin === "true") setIsAdmin(true);

    if (savedUser && savedUser !== "undefined") {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        localStorage.removeItem("user");
      }
    }

    setLoading(false);
  }, []);

  /* -----------------------------------------
                  LOGIN
  -----------------------------------------*/
  const login = async ({ email, password }: ILoginRequest) => {
    const { data } = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });

    // ⭐ ADMIN LOGIN
    if (data.isAdmin) {
      localStorage.setItem("admin", "true");
      localStorage.setItem("token", data.token);

      setIsAdmin(true);
      setToken(data.token);
      setUser(null); // Admin no tiene user
      
      return;
    }

    // ⭐ USUARIO NORMAL
    setUser(data.user);
    setToken(data.token);

    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
  };

  /* -----------------------------------------
                REGISTER
  -----------------------------------------*/
  const register = async (dataRegister: IRegisterRequest) => {
    await axios.post(`${API_URL}/auth/register`, dataRegister);
  };

  /* -----------------------------------------
                LOGOUT
  -----------------------------------------*/
  const logout = () => {
    setUser(null);
    setToken(null);
    setIsAdmin(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("admin");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        register,
        logout,
        loading,
        isAdmin, // ⭐ IMPORTANTE
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  return context;
};
