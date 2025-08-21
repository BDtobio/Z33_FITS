// components/ProductCard.tsx
import React from "react";
import { IProduct } from "@/interfaces/IProduct";
import Image from "next/image";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
   <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
  <div className="relative w-full h-64">
    <Image
      src={product.image_url}
      alt={product.name}
      fill
      className="object-cover"
    />
  </div>
  <div className="p-4 flex-1 flex flex-col justify-between">
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-2">{product.category.id}</p>
    </div>
    <p className="text-gray-900 font-bold mt-2">${product.price.toLocaleString()}</p>
  </div>
</div>
  );
};

export default ProductCard;
