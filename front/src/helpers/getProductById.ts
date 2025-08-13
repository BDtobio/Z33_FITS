import { IProduct } from "@/interfaces/IProduct";
import axios from "axios";

export const getProductById = async (id: string): Promise<IProduct> => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
    if (!response.data) {
      throw new Error("Product not found");
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch product");
  }
};
