"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGender = exports.updateGender = exports.createGender = exports.getGenderById = exports.getAllGenders = void 0;
const dataSource_1 = require("../config/dataSource");
const Gender_1 = require("../entities/Gender");
const genderRepository = dataSource_1.AppDataSource.getRepository(Gender_1.Gender);
const getAllGenders = async () => {
    return await genderRepository.find();
};
exports.getAllGenders = getAllGenders;
const getGenderById = async (id) => {
    return await genderRepository.findOneBy({ id });
};
exports.getGenderById = getGenderById;
const createGender = async (name) => {
    const newGender = genderRepository.create({ name });
    return await genderRepository.save(newGender);
};
exports.createGender = createGender;
const updateGender = async (id, name) => {
    const gender = await genderRepository.findOneBy({ id });
    if (!gender)
        return null;
    gender.name = name;
    return await genderRepository.save(gender);
};
exports.updateGender = updateGender;
const deleteGender = async (id) => {
    const gender = await genderRepository.findOneBy({ id });
    if (!gender)
        return false;
    await genderRepository.remove(gender);
    return true;
};
exports.deleteGender = deleteGender;
