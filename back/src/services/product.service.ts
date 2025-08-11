import { AppDataSource } from '../config/dataSource';
import { Product } from '../entities/Product';
import { CreateProductDto } from '../dtos/create-product.dto';

const productRepo = AppDataSource.getRepository(Product);

export const getAllProducts = async (): Promise<Product[]> => {
  return await productRepo.find({ relations: ['category', 'gender'] });
};

export const getProductById = async (id: string): Promise<Product | null> => {
  return await productRepo.findOne({ where: { id }, relations: ['category', 'gender'] });
};

export const createProduct = async (dto: CreateProductDto): Promise<Product> => {
  const product = productRepo.create(dto);
  return await productRepo.save(product);
};

export const updateProduct = async (id: string, dto: Partial<CreateProductDto>): Promise<Product | null> => {
  const product = await productRepo.findOneBy({ id });
  if (!product) return null;
  productRepo.merge(product, dto);
  return await productRepo.save(product);
};

export const deleteProduct = async (id: string): Promise<boolean> => {
  const result = await productRepo.delete(id);
  return result.affected !== 0;
};
