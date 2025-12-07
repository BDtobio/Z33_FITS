import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";

export const productRepository = AppDataSource.getRepository(Product);

export const findAll = () => {
  return productRepository.find({
    where: { active: true },
    relations: ["category", "gender"],
    order: { created_at: "DESC" },
  });
};

export const findById = (id: string) => {
  return productRepository.findOne({
    where: { id },
    relations: ["category", "gender"],
  });
};

export const createProduct = (data: Partial<Product>) => {
  return productRepository.save(productRepository.create(data));
};

export const updateProduct = async (id: string, data: Partial<Product>) => {
  await productRepository.update(id, data);
  return productRepository.findOneBy({ id });
};

export const deleteProduct = async (id: string) => {
  await productRepository.update(id, { active: false });
  return true;
};

export const getProductsByCategory = async (categoryId: string) => {
  return productRepository.find({
    where: {
      category: { id: categoryId },
      active: true,
    },
    relations: ["category", "gender"],
    order: { created_at: "DESC" },
  });
};
