"use client";

import { useEffect, useState } from "react";
import { IProduct } from "@/interfaces/IProduct";
import axiosInstance from "../../api/axiosInstance"; // tu instancia de axios
import Image from "next/image";

export default function ProductsPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axiosInstance.get("/products"); 
        console.log("Respuesta completa de Axios:", res); // <-- log completo de la respuesta
        console.log("Datos de productos:", res.data);      // <-- log solo del array de productos
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (products.length === 0) return <p>No hay productos disponibles.</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Todos los Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded p-4">
            <Image
              src={product.image_url}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="mt-2 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
