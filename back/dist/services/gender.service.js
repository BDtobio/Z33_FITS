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
exports.deleteGender = exports.updateGender = exports.createGender = exports.getGenderById = exports.getAllGenders = void 0;
const dataSource_1 = require("../config/dataSource");
const Gender_1 = require("../entities/Gender");
const genderRepository = dataSource_1.AppDataSource.getRepository(Gender_1.Gender);
const getAllGenders = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield genderRepository.find();
});
exports.getAllGenders = getAllGenders;
const getGenderById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield genderRepository.findOneBy({ id });
});
exports.getGenderById = getGenderById;
const createGender = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const newGender = genderRepository.create({ name });
    return yield genderRepository.save(newGender);
});
exports.createGender = createGender;
const updateGender = (id, name) => __awaiter(void 0, void 0, void 0, function* () {
    const gender = yield genderRepository.findOneBy({ id });
    if (!gender)
        return null;
    gender.name = name;
    return yield genderRepository.save(gender);
});
exports.updateGender = updateGender;
const deleteGender = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const gender = yield genderRepository.findOneBy({ id });
    if (!gender)
        return false;
    yield genderRepository.remove(gender);
    return true;
});
exports.deleteGender = deleteGender;
