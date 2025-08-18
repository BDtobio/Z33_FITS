// services/product.service.ts
import { AppDataSource } from '../config/dataSource';
import { Product } from '../entities/Product';

const productRepository = AppDataSource.getRepository(Product);

export const findAll = async (): Promise<Product[]> => {
  return await productRepository.find({
    relations: ['category', 'gender'],
    order: { created_at: 'DESC' },
  });
};

export const findById = async (id: string): Promise<Product | null> => {
  return await productRepository.findOne({
    where: { id },
    relations: ['category', 'gender'],
  });
};

export const findByCategory = async (categoryId: string): Promise<Product[]> => {
  try {
    return await productRepository.find({
      where: { category: { id: categoryId } },
      relations: ['category', 'gender'],
      order: { created_at: 'DESC' },
    });
  } catch (error) {
    console.error("Error en findByCategory:", error);
    return [];
  }
};

export const createProduct = async (productData: Partial<Product>): Promise<Product> => {
  const product = productRepository.create(productData);
  return await productRepository.save(product);
};

export const updateProduct = async (id: string, productData: Partial<Product>): Promise<Product | null> => {
  await productRepository.update(id, productData);
  return await findById(id);
};

export const deleteProduct = async (id: string): Promise<boolean> => {
  const result = await productRepository.delete(id);
  return result.affected ? true : false;
};
