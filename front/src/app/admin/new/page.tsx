"use client";

import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { ICategory } from "@/interfaces/ICategory";
import { IGender } from "@/interfaces/IGender";
import { IProductForm } from "@/interfaces/IProductForm";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function NewProduct() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [genders, setGenders] = useState<IGender[]>([]);

  const [form, setForm] = useState<IProductForm>({
    name: "",
    description: "",
    price: "",
    stock: "",
    image_url: "",
    category_id: "",
    gender_id: "",
  });

  useEffect(() => {
    const loadData = async () => {
      const resCat = await fetch(`${API}/categories`);
      const resGen = await fetch(`${API}/genders`);
      setCategories(await resCat.json());
      setGenders(await resGen.json());
    };
    loadData();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch(`${API}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    window.location.href = "/admin";
  };

  return (
    <div className="p-8 max-w-lg mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6">Crear Nueva Prenda</h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Nombre"
          className="p-3 bg-white text-black border rounded"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Descripción"
          className="p-3 bg-white text-black border rounded"
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Precio"
          className="p-3 bg-white text-black border rounded"
          onChange={handleChange}
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          className="p-3 bg-white text-black border rounded"
          onChange={handleChange}
        />

        <input
          name="image_url"
          placeholder="URL de la imagen"
          className="p-3 bg-white text-black border rounded"
          onChange={handleChange}
        />

        <select
          name="category_id"
          className="p-3 bg-white text-black border rounded"
          onChange={handleChange}
        >
          <option value="">Seleccionar Categoría</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>

        <select
          name="gender_id"
          className="p-3 bg-white text-black border rounded"
          onChange={handleChange}
        >
          <option value="">Seleccionar Género</option>
          {genders.map((g) => (
            <option key={g.id} value={g.id}>{g.name}</option>
          ))}
        </select>

        <button className="bg-green-600 py-3 rounded text-white font-semibold hover:bg-green-700 transition">
          Crear Producto
        </button>
      </form>
    </div>
  );
}
