// src/db/dtos/product-response.dto.ts

export interface ProductResponseDto {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image_url: string;
  category: {
    id: string;
    name: string;
  };
  gender: {
    id: string;
    name: string;
  };
  created_at: Date;
  updated_at: Date;
}
