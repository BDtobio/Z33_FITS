import { AppDataSource } from '../config/dataSource';
import { Category } from '../entities/Category';

const categoryRepository = AppDataSource.getRepository(Category);

export const getAllCategories = async (): Promise<Category[]> => {
  return await categoryRepository.find();
};

export const getCategoryById = async (id: string): Promise<Category | null> => {
  return await categoryRepository.findOneBy({ id });
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
