
"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IProduct } from '@/interfaces/IProduct';
import Image from 'next/image';

// Definir las categorías, ahora solo usaremos sus nombres
const categories = [
  { id: 1, name: 'Remeras', icon: '/icons/remeras-icon.png' },
  { id: 2, name: 'Accesorios', icon: '/icons/accesorios-icon.png' },
  { id: 3, name: 'Pantalones', icon: '/icons/pantalones-icon.png' },
  { id: 4, name: 'Gorras', icon: '/icons/gorras-icon.png' },
  { id: 5, name: 'Chombas', icon: '/icons/chombas-icon.png' }
];



const DropsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Remeras');
  const [clothes, setClothes] = useState<IProduct[]>([]); 

  
  useEffect(() => {
   
    axios.get(`/clothes?category=${selectedCategory}`)
      .then((response) => {
        setClothes(response.data); 
      })
      .catch((error) => {
        console.error("Error al obtener productos", error);
      });
  }, [selectedCategory]);

  return (
    <div className="py-16 px-4 mt-24">
      <h2 className="text-4xl font-bold text-center mb-8 text-red-600">Categorías de Prendas</h2>
      
      {/* Mostrar los iconos de las categorías */}
      <div className="flex justify-center gap-8 mb-8">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => setSelectedCategory(category.name)}
            className="cursor-pointer text-center hover:scale-105 transition-transform"
          >
           <Image
  src={category.icon}
  alt={category.name}
  width={80}   // 20 * 4 (para que mantenga proporción con w-20)
  height={80}  // 20 * 4
  className="mb-2"
/>
            <p className="text-lg font-semibold">{category.name}</p>
          </div>
        ))}
      </div>

    
      <h3 className="text-3xl font-bold text-center mb-6 text-red-600">{selectedCategory}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {clothes.length > 0 ? (
          clothes.map((clothe) => (
            <div key={clothe.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all border-l-4 border-red-600">
     <Image
  src={clothe.image_url}
  alt={clothe.category_id}  // <-- Aquí usamos el nombre, que es string
  width={400}
  height={240}
  className="rounded-md mb-4 object-cover"
/>
              
              <p className="text-gray-500 mt-2">{clothe.description}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No hay productos disponibles en esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default DropsSection;
