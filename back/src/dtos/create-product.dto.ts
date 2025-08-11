// src/db/dtos/create-product.dto.ts

export interface CreateProductDto {
  name: string;
  description: string;
  price: number;
  stock: number;
  image_url: string;
  category_id: string; // UUID de categoría
  gender_id: string;   // UUID de género
}
