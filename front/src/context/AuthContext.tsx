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
  const [loading, setLoading] = useState(true);

  /* -------------------------------
      CARGAR SESIÓN DESDE LOCALSTORAGE
  --------------------------------*/
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (savedToken) setToken(savedToken);

    if (savedUser && savedUser !== "undefined") {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        console.error("Error parsing saved user");
        localStorage.removeItem("user");
      }
    }

    setLoading(false);
  }, []);

  /* -------------------------------
                  LOGIN
  --------------------------------*/
  const login = async (credentials: ILoginRequest) => {
    const { email, password } = credentials;

    const { data } = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });

    setUser(data.user);
    setToken(data.token);

    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
  };

  /* -------------------------------
                REGISTER
  --------------------------------*/
  const register = async (dataRegister: IRegisterRequest) => {
 const { data } = await axios.post(`${API_URL}/auth/register`, dataRegister);

console.log("Usuario registrado:", data);


    // NO logueamos automáticamente — solo redirigimos
    // Si querés auto-login, avisá y lo agregamos
  };

  /* -------------------------------
                LOGOUT
  --------------------------------*/
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/* -------------------------------
        CUSTOM HOOK
--------------------------------*/
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  return context;
};
