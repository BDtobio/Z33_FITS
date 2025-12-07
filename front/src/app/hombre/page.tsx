"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { IProduct } from "@/interfaces/IProduct";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002";

// ⚠️ Reemplazar por el ID real de "Hombre" que tengas en tu BD
const GENDER_ID = "ID_GENERO_HOMBRE";

export default function HombrePage() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`${API_URL}/products/gender/${GENDER_ID}`);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Hombre</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((p) => (
          <div
            key={p.id}
            className="border p-4 rounded-lg shadow hover:shadow-md transition bg-white"
          >
            {/* Imagen con Next/Image */}
            <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
              <Image
                src={p.image_url}
                alt={p.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="text-gray-600 text-sm">{p.description}</p>
            <p className="text-red-600 font-bold mt-2">${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
