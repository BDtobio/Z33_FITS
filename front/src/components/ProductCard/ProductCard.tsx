"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IProduct } from "../../interfaces/IProduct"; // importa tu interfaz
import axiosInstance from "@/api/axiosInstance";

export default function RemerasGrid() {
  const [products, setProducts] = useState<IProduct[]>([]);

 useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Usando axiosInstance
        const { data } = await axiosInstance.get<IProduct[]>(
          "/products",
          {
            params: {
              category: "263073bc-1952-469f-ac15-9a0e77037fc5", // UUID de categoría "Remeras"
            },
          }
        );
        setProducts(data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {products[0]?.category.name || "Remeras"} Hombre
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded shadow hover:scale-105 transition-all"
          >
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
          </div>
        ))}
      </div>
    </div>
  );
}
