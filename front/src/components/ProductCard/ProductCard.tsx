// components/ProductCard.tsx
import React from "react";
import { IProduct } from "@/interfaces/IProduct";
import Image from "next/image";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Image
  src={product.image_url}
  alt={product.name}
  width={400}       // ancho deseado
  height={400}      // alto deseado
  className="w-full h-64 object-cover rounded-t-lg"
/>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-2">{product.category_id}</p>
        <p className="text-gray-900 font-bold">${product.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ProductCard;
