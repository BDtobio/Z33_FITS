"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsByCategory = exports.getProductsByGender = exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.findById = exports.findAll = exports.productRepository = void 0;
const dataSource_1 = require("../config/dataSource");
const Product_1 = require("../entities/Product");
exports.productRepository = dataSource_1.AppDataSource.getRepository(Product_1.Product);
const findAll = () => {
    return exports.productRepository.find({
        where: { active: true },
        relations: ["category", "gender"],
        order: { created_at: "DESC" },
    });
};
exports.findAll = findAll;
const findById = (id) => {
    return exports.productRepository.findOne({
        where: { id },
        relations: ["category", "gender"],
    });
};
exports.findById = findById;
const createProduct = (data) => {
    return exports.productRepository.save(exports.productRepository.create(data));
};
exports.createProduct = createProduct;
const updateProduct = async (id, data) => {
    await exports.productRepository.update(id, data);
    return exports.productRepository.findOneBy({ id });
};
exports.updateProduct = updateProduct;
const deleteProduct = async (id) => {
    await exports.productRepository.update(id, { active: false });
    return true;
};
exports.deleteProduct = deleteProduct;
const getProductsByGender = async (genderId) => {
    return await exports.productRepository.find({
        where: { gender: { id: genderId } },
        relations: ["category", "gender"],
    });
};
exports.getProductsByGender = getProductsByGender;
const getProductsByCategory = async (categoryId) => {
    return exports.productRepository.find({
        where: {
            category: { id: categoryId },
            active: true,
        },
        relations: ["category", "gender"],
        order: { created_at: "DESC" },
    });
};
exports.getProductsByCategory = getProductsByCategory;
