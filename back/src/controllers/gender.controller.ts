import { Request, Response } from 'express';
import { AppDataSource } from '../config/dataSource';
import { Gender } from '../entities/Gender';

const genderRepository = AppDataSource.getRepository(Gender);

export const getGenders = async (req: Request, res: Response) => {
  try {
    const genders = await genderRepository.find();
    res.status(200).json(genders);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener géneros' });
  }
};

export const getGender = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const gender = await genderRepository.findOneBy({ id });
    if (!gender) return res.status(404).json({ message: 'Género no encontrado' });

    res.status(200).json(gender);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener género' });
  }
};

export const createGender = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: 'El nombre es obligatorio' });

    const newGender = genderRepository.create({ name });
    const savedGender = await genderRepository.save(newGender);
    res.status(201).json(savedGender);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear género' });
  }
};

export const updateGender = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const gender = await genderRepository.findOneBy({ id });
    if (!gender) return res.status(404).json({ message: 'Género no encontrado' });

    gender.name = name ?? gender.name;
    const updatedGender = await genderRepository.save(gender);

    res.status(200).json(updatedGender);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar género' });
  }
};

export const deleteGender = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const gender = await genderRepository.findOneBy({ id });
    if (!gender) return res.status(404).json({ message: 'Género no encontrado' });

    await genderRepository.remove(gender);

    res.status(200).json({ message: 'Género eliminado' });
  } catch (error) {
    res.status(400).json({ message: 'Error al eliminar género' });
  }
};
