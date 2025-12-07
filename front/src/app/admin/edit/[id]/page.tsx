/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function EditProduct({ params }: any) {
  const { id } = params;
  const [form, setForm] = useState<any>(null);

  const loadProduct = async () => {
    const res = await fetch(`${API}/products/${id}`);
    const data = await res.json();
    setForm(data);
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch(`${API}/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    window.location.href = "/admin";
  };

  if (!form) return <p className="p-6">Cargando...</p>;

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Editar Prenda</h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input name="name" className="border p-2" value={form.name} onChange={handleChange} />
        <textarea name="description" className="border p-2" value={form.description} onChange={handleChange} />
        <input type="number" name="price" className="border p-2" value={form.price} onChange={handleChange} />
        <input type="number" name="stock" className="border p-2" value={form.stock} onChange={handleChange} />
        <input name="image_url" className="border p-2" value={form.image_url} onChange={handleChange} />
        <input name="category_id" className="border p-2" value={form.category?.id} onChange={handleChange} />
        <input name="gender_id" className="border p-2" value={form.gender?.id} onChange={handleChange} />

        <button className="bg-blue-600 text-white p-2 rounded">
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}
