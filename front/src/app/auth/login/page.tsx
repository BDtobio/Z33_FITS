/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await login({
        email: form.email.trim(),
        password: form.password.trim(),
      });

      window.location.href = "/"; // redirige a home
    } catch (error) {
      alert("Credenciales incorrectas");
      console.error(error);
    }
  };

  return (
    <div className="space-y-6 text-white">

      <h1 className="text-3xl font-semibold text-center">
        Iniciar Sesión
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 bg-white text-black rounded-md outline-none"
            placeholder="tucorreo@gmail.com"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Contraseña</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 bg-white text-black rounded-md outline-none"
            placeholder="••••••••"
          />
        </div>

        <button
          className="w-full bg-red-600 py-3 rounded-md font-semibold hover:bg-red-700 transition"
        >
          Iniciar Sesión
        </button>
      </form>

      <p className="text-center text-sm">
        ¿No tenés cuenta?{" "}
        <a href="/auth/register" className="underline">
          Crear cuenta
        </a>
      </p>
    </div>
  );
}
