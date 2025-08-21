export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image_url: string;
  category: { id: string; name: string };
  gender: { id: string; name: string };
  created_at: string; 
  updated_at: string;
}
