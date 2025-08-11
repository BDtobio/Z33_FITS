"use client"
// pages/clothes/page.tsx
import { useEffect, useState } from "react";
import { IClothe } from "@/interfacecs/IClothe";
import { getClothes } from "@/helpers/getClothes"; // Asegúrate de que la ruta sea correcta

const ClothesPage = () => {
  // Estado para almacenar los productos
  const [clothes, setClothes] = useState<IClothe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Llamada a la API para obtener los productos
  useEffect(() => {
    const fetchClothes = async () => {
      try {
        const products = await getClothes(); // Llama a la función que has creado
        setClothes(products);
      } catch (error) {
        setError("No se pudieron cargar los productos.");
      } finally {
        setLoading(false);
      }
    };

    fetchClothes();
  }, []); // La dependencia vacía asegura que solo se ejecute una vez al montar el componente

  // Si está cargando, mostrar un mensaje
  if (loading) {
    return <p className="text-center text-xl text-gray-500">Cargando productos...</p>;
  }

  // Si hubo un error, mostrar el mensaje de error
  if (error) {
    return <p className="text-center text-xl text-red-500">{error}</p>;
  }

  // Mostrar los productos
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Productos de Ropa</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {clothes.length > 0 ? (
          clothes.map((clothe) => (
            <div key={clothe.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src={clothe.image} alt={clothe.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{clothe.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{clothe.description}</p>
              <p className="text-lg font-semibold text-gray-900 mb-2">Precio: ${clothe.price}</p>
              <p className="text-sm text-gray-500">Stock: {clothe.stock}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-xl text-gray-500">No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default ClothesPage;
