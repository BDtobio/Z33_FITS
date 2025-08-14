// helpers/productsCategory.ts
import { IProduct } from "@/interfaces/IProduct";
import { getProducts } from "./getProducts"; // tu función que trae todos los productos

export const getProductsByCategory = async (categoryName: string): Promise<IProduct[]> => {
  try {
    const allProducts = await getProducts(); // traemos todos los productos
    // filtramos por categoría sin importar género
    return allProducts.filter(product => product.category.name.toLowerCase() === categoryName.toLowerCase());
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
};
