/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

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

  const deleteProduct = async (id: string) => {
    if (!confirm("¿Eliminar producto?")) return;

    await fetch(`${API}/products/${id}`, {
      method: "DELETE",
    });

    loadProducts();
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Panel de Administración</h1>

      <a
        href="/admin/new"
        className="bg-blue-600 text-white px-4 py-2 rounded inline-block mb-6"
      >
        ➕ Crear Nueva Prenda
      </a>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Nombre</th>
            <th className="p-2">Precio</th>
            <th className="p-2">Stock</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p: any) => (
            <tr key={p.id} className="border-b">
              <td className="p-2">{p.name}</td>
              <td className="p-2">${p.price}</td>
              <td className="p-2">{p.stock}</td>
              <td className="p-2 flex gap-4">
                <a className="text-blue-600" href={`/admin/edit/${p.id}`}>
                  Editar
                </a>
                <button
                  className="text-red-600"
                  onClick={() => deleteProduct(p.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
