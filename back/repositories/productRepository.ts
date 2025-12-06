import { AppDataSource } from "..//src/config/dataSource";
import { Product } from "..//src/entities/Product";

export const productRepository = AppDataSource.getRepository(Product);

// Buscar todos los productos activos
export const findAll = () => {
  return productRepository.find({
    where: { active: true },
    relations: ["category", "gender"],
    order: { created_at: "DESC" }
  });
};

// Buscar por ID
export const findById = (id: string) => {
  return productRepository.findOne({
    where: { id },
    relations: ["category", "gender"]
  });
};

// Crear producto
export const createProduct = (data: Partial<Product>) => {
  return productRepository.save(productRepository.create(data));
};

// Actualizar producto
export const updateProduct = async (id: string, data: Partial<Product>) => {
  await productRepository.update(id, data);
  return productRepository.findOneBy({ id });
};

// Eliminar (borrado lógico)
export const deleteProduct = async (id: string) => {
  await productRepository.update(id, { active: false });
  return true;
};
