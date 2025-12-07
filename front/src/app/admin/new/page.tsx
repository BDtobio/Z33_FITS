/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
const API = process.env.NEXT_PUBLIC_API_URL;

export default function NewProduct() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image_url: "",
    category_id: "",
    gender_id: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch(`${API}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    window.location.href = "/admin";
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Crear Nueva Prenda</h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input name="name" placeholder="Nombre" className="border p-2" onChange={handleChange} />
        <textarea name="description" placeholder="Descripción" className="border p-2" onChange={handleChange} />
        <input type="number" name="price" placeholder="Precio" className="border p-2" onChange={handleChange} />
        <input type="number" name="stock" placeholder="Stock" className="border p-2" onChange={handleChange} />
        <input name="image_url" placeholder="URL imagen" className="border p-2" onChange={handleChange} />
        <input name="category_id" placeholder="ID Categoría" className="border p-2" onChange={handleChange} />
        <input name="gender_id" placeholder="ID Género" className="border p-2" onChange={handleChange} />

        <button className="bg-green-600 text-white p-2 rounded">
          Crear Producto
        </button>
      </form>
    </div>
  );
}
