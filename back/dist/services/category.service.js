"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategoryById = exports.productService = exports.getAllCategories = void 0;
const dataSource_1 = require("../config/dataSource");
const Category_1 = require("../entities/Category");
const Product_1 = require("../entities/Product");
const categoryRepository = dataSource_1.AppDataSource.getRepository(Category_1.Category);
const getAllCategories = async () => {
    return await categoryRepository.find();
};
exports.getAllCategories = getAllCategories;
exports.productService = {
    getProductsByCategory: async (categoryId) => {
        return await dataSource_1.AppDataSource.getRepository(Product_1.Product).find({
            where: { category: { id: categoryId } },
            relations: ["category", "gender"]
        });
    }
};
const getCategoryById = async (id) => {
    return await dataSource_1.AppDataSource.getRepository(Category_1.Category).findOneBy({ id });
};
exports.getCategoryById = getCategoryById;
const createCategory = async (name) => {
    const newCategory = categoryRepository.create({ name });
    return await categoryRepository.save(newCategory);
};
exports.createCategory = createCategory;
const updateCategory = async (id, name) => {
    const category = await categoryRepository.findOneBy({ id });
    if (!category)
        return null;
    category.name = name;
    return await categoryRepository.save(category);
};
exports.updateCategory = updateCategory;
const deleteCategory = async (id) => {
    const category = await categoryRepository.findOneBy({ id });
    if (!category)
        return false;
    await categoryRepository.remove(category);
    return true;
};
exports.deleteCategory = deleteCategory;
