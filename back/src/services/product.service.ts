import * as productRepository from '../repositories/product.repository';
import { Product } from '../entities/Product';

// Traer todos los productos
export const getAllProducts = async (): Promise<Product[]> => {
  return await productRepository.findAll();
};

// Traer un producto por ID
export const getProductById = async (id: string): Promise<Product | null> => {
  return await productRepository.findById(id);
};

// Crear un producto
export const createProduct = async (productData: Partial<Product>): Promise<Product> => {
  return await productRepository.createProduct(productData);
};

// Actualizar un producto
export const updateProduct = async (id: string, productData: Partial<Product>): Promise<Product | null> => {
  return await productRepository.updateProduct(id, productData);
};

// Eliminar un producto
export const deleteProduct = async (id: string): Promise<boolean> => {
  return await productRepository.deleteProduct(id);
};

// NUEVO: Traer productos por categoría
export const getProductsByCategory = async (categoryId: string): Promise<Product[]> => {
  return await productRepository.findByCategory(categoryId);
};
