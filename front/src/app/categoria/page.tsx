"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Hook de Next.js para obtener el slug/id
import { IProduct } from "../../interfaces/IProduct";
import Image from "next/image";
import Link from "next/link";

export default function ProductPage() {
  const params = useParams(); 
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3000/products/${params.id}`);
        if (!res.ok) throw new Error("Error al obtener producto");
        const data: IProduct = await res.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [params.id]);

  if (loading) return <div className="text-center mt-10">Cargando...</div>;
  if (!product) return <div className="text-center mt-10">Producto no encontrado</div>;

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex flex-col md:flex-row gap-6">
      {/* Imagen */}
      <div className="flex-1 relative w-full h-96 md:h-auto">
        <Image
          src={product.image_url}
          alt={product.name}
          layout="fill"
          objectFit="contain"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Información */}
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-red-600 font-bold text-2xl">${product.price}</p>
        <p className="text-gray-500">
          Stock: {product.stock} | Categoría: {product.category.name} | Género: {product.gender.name}
        </p>

        <button className="mt-4 px-6 py-3 bg-red-700 text-white font-semibold rounded-md hover:bg-red-900 transition">
          Agregar al carrito
        </button>

        <Link href={`/categoria/${product.category.name.toLowerCase().replace(/\s+/g, '-')}`}>
          <button className="mt-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition">
            Volver a {product.category.name}
          </button>
        </Link>
      </div>
    </div>
  );
}
