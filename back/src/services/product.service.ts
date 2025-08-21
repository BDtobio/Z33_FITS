// services/product.service.ts
import { AppDataSource } from '../config/dataSource';
import { Product } from '../entities/Product';
// Sin relaciones

export const findAll = async (): Promise<Product[]> => {
  return await AppDataSource.manager.find(Product, {
    relations: ['category', 'gender'],
    order: { created_at: 'DESC' },
  });
};

export const findById = async (id: string): Promise<Product | null> => {
  return await AppDataSource.manager.findOne(Product, {
    where: { id },
    relations: ['category', 'gender'],
  });
};

export const findByCategory = async (categoryId: string): Promise<Product[]> => {
  try {
    return await AppDataSource.manager.find(Product, {
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
  const product = AppDataSource.manager.create(Product, productData);
  return await AppDataSource.manager.save(product);
};

export const updateProduct = async (id: string, productData: Partial<Product>): Promise<Product | null> => {
  await AppDataSource.manager.update(Product, id, productData);
  return await findById(id);
};

export const deleteProduct = async (id: string): Promise<boolean> => {
  const result = await AppDataSource.manager.delete(Product, id);
  return result.affected ? true : false;
};
