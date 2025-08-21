import axiosInstance from "@/api/axiosInstance";

export interface ICategory {
  id: string;
  name: string;
}

export const getCategories = async (): Promise<ICategory[]> => {
  try {
    const res = await axiosInstance.get("/categories");
    return res.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};
