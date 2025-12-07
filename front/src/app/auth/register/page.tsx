/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    birthdate: "",
  });

  const { register } = useAuth();
  const router = useRouter();

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await register(form); // <-- 📌 AQUÍ SE REGISTRA DE VERDAD
      router.push("/auth/login"); // <-- 📌 Redirección al login

    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  };

  return (
    <div className="space-y-6 text-black">
      <h1 className="text-3xl font-semibold text-center text-white">
        Crear Cuenta
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nombre */}
        <div>
          <label className="text-sm text-white font-medium">Nombre</label>
          <input
            name="name"
            onChange={handleChange}
            className="w-full p-3 bg-white text-black border border-gray-400 rounded-md"
            placeholder="Tu nombre"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-white font-medium">Email</label>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            className="w-full p-3 bg-white text-black border border-gray-400 rounded-md"
            placeholder="tucorreo@gmail.com"
          />
        </div>

        {/* Birthdate */}
        <div>
          <label className="text-sm text-white font-medium">Fecha de nacimiento</label>
          <input
            name="birthdate"
            type="date"
            onChange={handleChange}
            className="w-full p-3 bg-white text-black border border-gray-400 rounded-md"
          />
        </div>

        {/* Password */}
        <div>
          <label className="text-sm text-white font-medium">Contraseña</label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            className="w-full p-3 bg-white text-black border border-gray-400 rounded-md"
            placeholder="••••••••"
          />
        </div>

        <button className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition">
          Crear Cuenta
        </button>
      </form>

      <p className="text-center text-sm text-white">
        ¿Ya tenés cuenta?{" "}
        <a href="/auth/login" className="underline hover:text-gray-300">
          Iniciar sesión
        </a>
      </p>
    </div>
  );
}
