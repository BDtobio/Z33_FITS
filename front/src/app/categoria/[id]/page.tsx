"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { IProduct } from "@/interfaces/IProduct";
import axiosInstance from "../../../api/axiosInstance";
import Image from "next/image";
import Link from "next/link";

export default function CategoryPage() {
  const { id } = useParams();
  const categoryId = Array.isArray(id) ? id[0] : id;

  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
useEffect(() => {
  if (!categoryId) return;

  const fetchProducts = async () => {
    try {
      const res = await axiosInstance.get(`/products/category/${categoryId}`);
      setProducts(res.data);
    } catch (err) {
      // Validación segura del error
      const errorMessage =
        err instanceof Error ? err.message : "Error desconocido";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, [categoryId]);


  if (loading) return <p className="text-center mt-10">Cargando...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;
  if (products.length === 0) return <p className="text-center mt-10">No hay productos en esta categoría</p>;

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <Link href="/categoria" className="text-blue-600 underline mb-4 inline-block">
        ← Volver a Categorías
      </Link>

      <h1 className="text-3xl font-bold mb-6 text-center">
        {products[0]?.category.name || "Categoría"}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow hover:scale-105 transition-all">
            <Image
              src={product.image_url}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-red-600 font-bold mt-2">${product.price}</p>
            <p className="text-sm text-gray-500 mt-1">
              Stock: {product.stock} | Género: {product.gender.name}
            </p>
            <button className="bg-red-600 text-white px-4 py-2 mt-2 rounded hover:bg-red-700 transition">
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
