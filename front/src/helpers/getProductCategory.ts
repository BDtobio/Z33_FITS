import { IProduct } from "@/interfaces/IProduct";
import axiosInstance from "@/api/axiosInstance";

export const getProductsByCategory = async (categoryId: string): Promise<IProduct[]> => {
  try {
    const res = await axiosInstance.get(`/products/category/${categoryId}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
};
