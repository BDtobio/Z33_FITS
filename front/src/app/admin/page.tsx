/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";


import Link from "next/link";
import { useEffect, useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function AdminPanel() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const res = await fetch(`${API}/products`);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Panel de Administración</h1>

      <Link
        href="/admin/new"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        ➕ Crear Nueva Prenda
      </Link>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((p: any) => (
          <div
            key={p.id}
            className="border rounded-lg p-4 shadow bg-white flex flex-col gap-2"
          >
            <img 
  src={p.image_url} 
  className="w-full h-48 object-cover rounded"
  alt={p.name}
/>


            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-gray-600">{p.description}</p>
            <p className="text-red-600 font-bold text-lg">$ {p.price}</p>

            <div className="flex gap-4 mt-3">
              <Link
                href={`/admin/edit/${p.id}`}
                className="bg-yellow-500 px-4 py-1 rounded text-white hover:bg-yellow-600 transition"
              >
                ✏ Editar
              </Link>

              <button
                onClick={async () => {
                  await fetch(`${API}/products/${p.id}`, { method: "DELETE" });
                  loadProducts();
                }}
                className="bg-red-600 px-4 py-1 rounded text-white hover:bg-red-700 transition"
              >
                🗑 Borrar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
