import { Request, Response } from 'express';
import * as categoryService from '../services/category.service';

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener categorías' });
  }
};

export const getCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await categoryService.getCategoryById(id);
    if (!category) return res.status(404).json({ message: 'Categoría no encontrada' });

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener categoría' });
  }
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: 'El nombre es obligatorio' });

    const newCategory = await categoryService.createCategory(name);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear categoría' });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const updatedCategory = await categoryService.updateCategory(id, name);
    if (!updatedCategory) return res.status(404).json({ message: 'Categoría no encontrada' });

    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar categoría' });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleted = await categoryService.deleteCategory(id);
    if (!deleted) return res.status(404).json({ message: 'Categoría no encontrada' });

    res.status(200).json({ message: 'Categoría eliminada' });
  } catch (error) {
    res.status(400).json({ message: 'Error al eliminar categoría' });
  }
};
