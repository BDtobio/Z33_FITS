/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("REGISTER DATA:", form);
    // Aquí conectamos al backend
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-center">Crear Cuenta</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="text-sm">Nombre</label>
          <input
            name="name"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label className="text-sm">Email</label>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black"
            placeholder="tucorreo@gmail.com"
          />
        </div>

        <div>
          <label className="text-sm">Contraseña</label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black"
            placeholder="••••••••"
          />
        </div>

        <button className="w-full bg-black text-white py-3 rounded-md hover:bg-neutral-900 transition">
          Crear Cuenta
        </button>

      </form>

      <p className="text-center text-sm">
        ¿Ya tenés cuenta?{" "}
        <a href="/auth/login" className="underline hover:text-gray-700">
          Iniciar sesión
        </a>
      </p>
    </div>
  );
}
