import { Request, Response } from "express";
import { AppDataSource } from "../config/dataSource";
import { Gender } from "../entities/Gender";

const genderRepository = AppDataSource.getRepository(Gender);

// =============================
// 📌 Obtener todos los géneros
// =============================
export const getGenders = async (req: Request, res: Response) => {
  try {
    const genders = await genderRepository.find();
    return res.status(200).json(genders);
  } catch (error) {
    console.error("Error getGenders:", error);
    return res.status(500).json({ message: "Error al obtener géneros" });
  }
};

// =============================
// 📌 Obtener género por ID
// =============================
export const getGender = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const gender = await genderRepository.findOneBy({ id });
    if (!gender) {
      return res.status(404).json({ message: "Género no encontrado" });
    }

    return res.status(200).json(gender);
  } catch (error) {
    console.error("Error getGender:", error);
    return res.status(500).json({ message: "Error al obtener género" });
  }
};

// =============================
// 📌 Crear un nuevo género
// =============================
export const createGender = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    if (!name || name.trim() === "") {
      return res.status(400).json({ message: "El nombre es obligatorio" });
    }

    const exists = await genderRepository.findOneBy({ name });
    if (exists) {
      return res.status(409).json({ message: "Ese género ya existe" });
    }

    const newGender = genderRepository.create({ name });
    const savedGender = await genderRepository.save(newGender);

    return res.status(201).json(savedGender);
  } catch (error) {
    console.error("Error createGender:", error);
    return res.status(500).json({ message: "Error al crear género" });
  }
};

// =============================
// 📌 Actualizar un género
// =============================
export const updateGender = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const gender = await genderRepository.findOneBy({ id });
    if (!gender) {
      return res.status(404).json({ message: "Género no encontrado" });
    }

    if (name && name.trim() !== "") {
      gender.name = name;
    }

    const updated = await genderRepository.save(gender);
    return res.status(200).json(updated);
  } catch (error) {
    console.error("Error updateGender:", error);
    return res.status(500).json({ message: "Error al actualizar género" });
  }
};

// =============================
// 📌 Eliminar un género
// =============================
export const deleteGender = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const gender = await genderRepository.findOneBy({ id });
    if (!gender) {
      return res.status(404).json({ message: "Género no encontrado" });
    }

    await genderRepository.remove(gender);
    return res.status(200).json({ message: "Género eliminado correctamente" });

  } catch (error) {
    console.error("Error deleteGender:", error);
    return res.status(500).json({ message: "Error al eliminar género" });
  }
};
