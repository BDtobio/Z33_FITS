import { Request, Response } from 'express';
import * as productService from '../services/product.service';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos' });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: 'ID inválido' });

    const product = await productService.getProductById(id);
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener producto' });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = await productService.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear producto' });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: 'ID inválido' });

    const updatedProduct = await productService.updateProduct(id, req.body);
    if (!updatedProduct) return res.status(404).json({ message: 'Producto no encontrado' });

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar producto' });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: 'ID inválido' });

    const deleted = await productService.deleteProduct(id);
    if (!deleted) return res.status(404).json({ message: 'Producto no encontrado' });

    res.status(200).json({ message: 'Producto eliminado' });
  } catch (error) {
    res.status(400).json({ message: 'Error al eliminar producto' });
  }
};
