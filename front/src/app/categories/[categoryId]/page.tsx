"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { IProduct } from "../../../interfaces/IProduct";

import Image from "next/image";

import { getProductsByCategory } from "@/helpers/getProductCategory";

const CategoryPage = () => {
  const params = useParams();
  const categoryIdParam = params.categoryId;
 const categoryId = Array.isArray(categoryIdParam)
  ? categoryIdParam[0] // si es un array, tomamos el primero
  : categoryIdParam;

  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
useEffect(() => {
  if (!categoryId) return;

  const fetchProducts = async () => {
    const data = await getProductsByCategory(categoryId); // ahora sí recibe categoryId
    setProducts(data);
    setLoading(false);
  };

  fetchProducts();
}, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;
  if (products.length === 0) return <p>No hay productos en esta categoría.</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
  Categoría ID: {products[0]?.category.id}
</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded p-4">
            <Image
  src={product.image_url}
  alt={product.name}
  width={400}   // ajusta según el tamaño deseado
  height={300}  // ajusta según el tamaño deseado
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
};

export default CategoryPage;
