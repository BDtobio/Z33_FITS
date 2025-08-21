import { AppDataSource } from '../config/dataSource';
import { Category } from '../entities/Category';
import { Product } from '../entities/Product';

const categoryRepository = AppDataSource.getRepository(Category);

export const getAllCategories = async (): Promise<Category[]> => {
  return await categoryRepository.find();
};

export const productService = {
  getProductsByCategory: async (categoryId: string) => {
    return await AppDataSource.getRepository(Product).find({
      where: { category: { id: categoryId } },
      relations: ["category", "gender"]
    });
  }
};
export const getCategoryById = async (id: string) => {
  return await AppDataSource.getRepository(Category).findOneBy({ id });
};
export const createCategory = async (name: string): Promise<Category> => {
  const newCategory = categoryRepository.create({ name });
  return await categoryRepository.save(newCategory);
};

export const updateCategory = async (id: string, name: string): Promise<Category | null> => {
  const category = await categoryRepository.findOneBy({ id });
  if (!category) return null;
  category.name = name;
  return await categoryRepository.save(category);
};

export const deleteCategory = async (id: string): Promise<boolean> => {
  const category = await categoryRepository.findOneBy({ id });
  if (!category) return false;
  await categoryRepository.remove(category);
  return true;
};
