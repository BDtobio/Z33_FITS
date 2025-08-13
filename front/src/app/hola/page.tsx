"use client"
// pages/clothes/page.tsx
import { useEffect, useState } from "react";
import { IProduct } from "@/interfaces/IProduct";
import { getProducts } from "@/helpers/getProduct"; // Asegúrate de que la ruta sea correcta
import Image from "next/image";

const ProductsPage = () => {
  // Estado para almacenar los productos
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Llamada a la API para obtener los productos
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts(); // Llama a la función que has creado
        setProducts(products);
      } catch (error) {
  console.error(error);  // <-- usa la variable para que no sea “sin uso”
  setError("No se pudieron cargar los productos.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
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
        {products.length > 0 ? (
          products.map((product) => (
            <div key={  product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <Image
  src={ product.image_url}
  alt={ product.name}
  width={400}      // ancho deseado en px
  height={192}     // alto deseado en px (proporcional a 48*4)
  className="rounded-lg mb-4 object-cover w-full"
/>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{ product.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{ product.description}</p>
              <p className="text-lg font-semibold text-gray-900 mb-2">Precio: ${ product.price}</p>
              <p className="text-sm text-gray-500">Stock: { product.stock}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-xl text-gray-500">No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
