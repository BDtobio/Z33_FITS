import axios from "axios";
import { IProduct } from "@/interfaces/IProduct";
import { ICategory } from "@/interfaces/ICategory";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002";

// Obtener todos los productos
export const getProducts = async (): Promise<IProduct[]> => {
  const { data } = await axios.get(`${API_URL}/products`);
  return data;
};

// Obtener productos por categoría
export const getProductsByCategory = async (categoryId: string): Promise<IProduct[]> => {
  const { data } = await axios.get(`${API_URL}/products/category/${categoryId}`);
  return data;
};

// Obtener 1 producto por id
export const getProductById = async (id: string): Promise<IProduct> => {
  const { data } = await axios.get(`${API_URL}/products/${id}`);
  return data;
};

export const getCategories = async (): Promise<ICategory[]> => {
  const { data } = await axios.get(`${API_URL}/categories`);
  return data;
};
// Crear producto
export const createProduct = async (product: IProduct) => {
  const { data } = await axios.post(`${API_URL}/products`, product);
  return data;
};

// Eliminar producto
export const deleteProduct = async (id: string) => {
  const { data } = await axios.delete(`${API_URL}/products/${id}`);
  return data;
};

// Actualizar producto
export const updateProduct = async (id: string, product: Partial<IProduct>) => {
  const { data } = await axios.put(`${API_URL}/products/${id}`, product);
  return data;
};
