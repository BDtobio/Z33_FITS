"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGender = exports.updateGender = exports.createGender = exports.getGender = exports.getGenders = void 0;
const dataSource_1 = require("../config/dataSource");
const Gender_1 = require("../entities/Gender");
const genderRepository = dataSource_1.AppDataSource.getRepository(Gender_1.Gender);
// =============================
// 📌 Obtener todos los géneros
// =============================
const getGenders = async (req, res) => {
    try {
        const genders = await genderRepository.find();
        return res.status(200).json(genders);
    }
    catch (error) {
        console.error("Error getGenders:", error);
        return res.status(500).json({ message: "Error al obtener géneros" });
    }
};
exports.getGenders = getGenders;
// =============================
// 📌 Obtener género por ID
// =============================
const getGender = async (req, res) => {
    try {
        const { id } = req.params;
        const gender = await genderRepository.findOneBy({ id });
        if (!gender) {
            return res.status(404).json({ message: "Género no encontrado" });
        }
        return res.status(200).json(gender);
    }
    catch (error) {
        console.error("Error getGender:", error);
        return res.status(500).json({ message: "Error al obtener género" });
    }
};
exports.getGender = getGender;
// =============================
// 📌 Crear un nuevo género
// =============================
const createGender = async (req, res) => {
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
    }
    catch (error) {
        console.error("Error createGender:", error);
        return res.status(500).json({ message: "Error al crear género" });
    }
};
exports.createGender = createGender;
// =============================
// 📌 Actualizar un género
// =============================
const updateGender = async (req, res) => {
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
    }
    catch (error) {
        console.error("Error updateGender:", error);
        return res.status(500).json({ message: "Error al actualizar género" });
    }
};
exports.updateGender = updateGender;
// =============================
// 📌 Eliminar un género
// =============================
const deleteGender = async (req, res) => {
    try {
        const { id } = req.params;
        const gender = await genderRepository.findOneBy({ id });
        if (!gender) {
            return res.status(404).json({ message: "Género no encontrado" });
        }
        await genderRepository.remove(gender);
        return res.status(200).json({ message: "Género eliminado correctamente" });
    }
    catch (error) {
        console.error("Error deleteGender:", error);
        return res.status(500).json({ message: "Error al eliminar género" });
    }
};
exports.deleteGender = deleteGender;
