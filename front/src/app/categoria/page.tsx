"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { IProduct } from "@/interfaces/IProduct";
import { getProductById } from "@/helpers/getProductById";
import Image from "next/image";
import Link from "next/link";

export default function ProductPage() {
  const { id } = useParams();
const productId = Array.isArray(id) ? id[0] : id;
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
useEffect(() => {
  if (!productId) return; // Si no hay ID, no hacemos fetch

  const fetchProduct = async () => {
    try {
      const data = await getProductById(productId); // ahora TS sabe que es string
      setProduct(data);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Error desconocido";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  fetchProduct();
}, [productId]);

  if (loading) return <p className="text-center mt-10">Cargando...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;
  if (!product) return <p className="text-center mt-10">Producto no encontrado</p>;

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <Link href={`/categoria/${product.category.name.toLowerCase()}`} className="text-blue-600 underline mb-4 inline-block">
        ← Volver a {product.category.name}
      </Link>

      <div className="flex flex-col md:flex-row gap-6 mt-4">
        <div className="w-full md:w-1/2">
          <Image
            src={product.image_url}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-start">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-red-600 text-2xl font-bold mb-4">${product.price}</p>
          <p className="text-sm text-gray-500 mb-4">
            Stock: {product.stock} | Género: {product.gender.name}
          </p>
          <button className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
