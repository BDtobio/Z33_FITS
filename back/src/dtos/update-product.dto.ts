// src/db/dtos/update-product.dto.ts

export interface UpdateProductDto {
  name?: string;
  description?: string;
  price?: number;
  stock?: number;
  image_url?: string;
  category_id?: string;
  gender_id?: string;
}
