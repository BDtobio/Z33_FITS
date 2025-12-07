"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGender = exports.updateGender = exports.createGender = exports.getGender = exports.getGenders = void 0;
const dataSource_1 = require("../config/dataSource");
const Gender_1 = require("../entities/Gender");
const genderRepository = dataSource_1.AppDataSource.getRepository(Gender_1.Gender);
const getGenders = async (req, res) => {
    try {
        const genders = await genderRepository.find();
        res.status(200).json(genders);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener géneros' });
    }
};
exports.getGenders = getGenders;
const getGender = async (req, res) => {
    try {
        const { id } = req.params;
        const gender = await genderRepository.findOneBy({ id });
        if (!gender)
            return res.status(404).json({ message: 'Género no encontrado' });
        res.status(200).json(gender);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener género' });
    }
};
exports.getGender = getGender;
const createGender = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name)
            return res.status(400).json({ message: 'El nombre es obligatorio' });
        const newGender = genderRepository.create({ name });
        const savedGender = await genderRepository.save(newGender);
        res.status(201).json(savedGender);
    }
    catch (error) {
        res.status(400).json({ message: 'Error al crear género' });
    }
};
exports.createGender = createGender;
const updateGender = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const gender = await genderRepository.findOneBy({ id });
        if (!gender)
            return res.status(404).json({ message: 'Género no encontrado' });
        gender.name = name ?? gender.name;
        const updatedGender = await genderRepository.save(gender);
        res.status(200).json(updatedGender);
    }
    catch (error) {
        res.status(400).json({ message: 'Error al actualizar género' });
    }
};
exports.updateGender = updateGender;
const deleteGender = async (req, res) => {
    try {
        const { id } = req.params;
        const gender = await genderRepository.findOneBy({ id });
        if (!gender)
            return res.status(404).json({ message: 'Género no encontrado' });
        await genderRepository.remove(gender);
        res.status(200).json({ message: 'Género eliminado' });
    }
    catch (error) {
        res.status(400).json({ message: 'Error al eliminar género' });
    }
};
exports.deleteGender = deleteGender;
