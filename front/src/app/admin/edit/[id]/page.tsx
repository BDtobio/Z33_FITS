/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCallback, useEffect, useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function EditProduct({ params }: any) {
  const { id } = params;

  const [form, setForm] = useState<any>(null);
  const [categories, setCategories] = useState([]);
  const [genders, setGenders] = useState([]);
const loadProduct = useCallback(async () => {
  const product = await fetch(`${API}/products/${id}`).then(res => res.json());
  setForm({
    ...product,
    category_id: product.category?.id || "",
    gender_id: product.gender?.id || "",
  });
}, [id]);

const loadRefs = useCallback(async () => {
  const cat = await fetch(`${API}/categories`).then(r => r.json());
  const gen = await fetch(`${API}/genders`).then(r => r.json());
  setCategories(cat);
  setGenders(gen);
}, []);

useEffect(() => {
  loadProduct();
  loadRefs();
}, [loadProduct, loadRefs]);

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

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
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6">Editar Prenda</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-5 rounded shadow">

        <input name="name" className="input" value={form.name} onChange={handleChange} />

        <textarea name="description" className="input" value={form.description} onChange={handleChange} />

        <input type="number" name="price" className="input" value={form.price} onChange={handleChange} />

        <input type="number" name="stock" className="input" value={form.stock} onChange={handleChange} />

        <input name="image_url" className="input" value={form.image_url} onChange={handleChange} />

        <select name="category_id" className="input" value={form.category_id} onChange={handleChange}>
          {categories.map((c: any) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>

        <select name="gender_id" className="input" value={form.gender_id} onChange={handleChange}>
          {genders.map((g: any) => (
            <option key={g.id} value={g.id}>{g.name}</option>
          ))}
        </select>

        <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition">
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}
