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
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.findById = exports.findAll = exports.productRepository = void 0;
const dataSource_1 = require("../config/dataSource");
const Product_1 = require("../entities/Product");
exports.productRepository = dataSource_1.AppDataSource.getRepository(Product_1.Product);
// Buscar todos los productos activos
const findAll = () => {
    return exports.productRepository.find({
        where: { active: true },
        relations: ["category", "gender"],
        order: { created_at: "DESC" }
    });
};
exports.findAll = findAll;
// Buscar por ID
const findById = (id) => {
    return exports.productRepository.findOne({
        where: { id },
        relations: ["category", "gender"]
    });
};
exports.findById = findById;
// Crear producto
const createProduct = (data) => {
    return exports.productRepository.save(exports.productRepository.create(data));
};
exports.createProduct = createProduct;
// Actualizar producto
const updateProduct = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.productRepository.update(id, data);
    return exports.productRepository.findOneBy({ id });
});
exports.updateProduct = updateProduct;
// Eliminar (borrado lógico)
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.productRepository.update(id, { active: false });
    return true;
});
exports.deleteProduct = deleteProduct;
