"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGender = exports.updateGender = exports.createGender = exports.getGender = exports.getGenders = void 0;
const dataSource_1 = require("../config/dataSource");
const Gender_1 = require("../entities/Gender");
const genderRepository = dataSource_1.AppDataSource.getRepository(Gender_1.Gender);
const getGenders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const genders = yield genderRepository.find();
        res.status(200).json(genders);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener géneros' });
    }
});
exports.getGenders = getGenders;
const getGender = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const gender = yield genderRepository.findOneBy({ id });
        if (!gender)
            return res.status(404).json({ message: 'Género no encontrado' });
        res.status(200).json(gender);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener género' });
    }
});
exports.getGender = getGender;
const createGender = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        if (!name)
            return res.status(400).json({ message: 'El nombre es obligatorio' });
        const newGender = genderRepository.create({ name });
        const savedGender = yield genderRepository.save(newGender);
        res.status(201).json(savedGender);
    }
    catch (error) {
        res.status(400).json({ message: 'Error al crear género' });
    }
});
exports.createGender = createGender;
const updateGender = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const gender = yield genderRepository.findOneBy({ id });
        if (!gender)
            return res.status(404).json({ message: 'Género no encontrado' });
        gender.name = name !== null && name !== void 0 ? name : gender.name;
        const updatedGender = yield genderRepository.save(gender);
        res.status(200).json(updatedGender);
    }
    catch (error) {
        res.status(400).json({ message: 'Error al actualizar género' });
    }
});
exports.updateGender = updateGender;
const deleteGender = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const gender = yield genderRepository.findOneBy({ id });
        if (!gender)
            return res.status(404).json({ message: 'Género no encontrado' });
        yield genderRepository.remove(gender);
        res.status(200).json({ message: 'Género eliminado' });
    }
    catch (error) {
        res.status(400).json({ message: 'Error al eliminar género' });
    }
});
exports.deleteGender = deleteGender;
