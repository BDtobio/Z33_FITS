import { ICategory } from "./ICategory";
import { IGender } from "./IGender";

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image_url: string;
  category: ICategory;
  gender: IGender;
  created_at: string; // o Date, según prefieras
  updated_at: string;
}