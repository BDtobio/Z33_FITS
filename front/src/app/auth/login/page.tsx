/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("LOGIN DATA:", form);
    // Aquí conectamos al backend
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-center">Iniciar Sesión</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="text-sm">Email</label>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="tucorreo@gmail.com"
          />
        </div>

        <div>
          <label className="text-sm">Contraseña</label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="••••••••"
          />
        </div>

        <button className="w-full bg-black text-white py-3 rounded-md hover:bg-neutral-900 transition">
          Iniciar Sesión
        </button>

      </form>

      <p className="text-center text-sm">
        ¿No tenés cuenta?{" "}
        <a href="/auth/register" className="underline hover:text-gray-700">
          Crear cuenta
        </a>
      </p>
    </div>
  );
}
