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
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategoryById = exports.productService = exports.getAllCategories = void 0;
const dataSource_1 = require("../config/dataSource");
const Category_1 = require("../entities/Category");
const Product_1 = require("../entities/Product");
const categoryRepository = dataSource_1.AppDataSource.getRepository(Category_1.Category);
const getAllCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield categoryRepository.find();
});
exports.getAllCategories = getAllCategories;
exports.productService = {
    getProductsByCategory: (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield dataSource_1.AppDataSource.getRepository(Product_1.Product).find({
            where: { category: { id: categoryId } },
            relations: ["category", "gender"]
        });
    })
};
const getCategoryById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield dataSource_1.AppDataSource.getRepository(Category_1.Category).findOneBy({ id });
});
exports.getCategoryById = getCategoryById;
const createCategory = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const newCategory = categoryRepository.create({ name });
    return yield categoryRepository.save(newCategory);
});
exports.createCategory = createCategory;
const updateCategory = (id, name) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield categoryRepository.findOneBy({ id });
    if (!category)
        return null;
    category.name = name;
    return yield categoryRepository.save(category);
});
exports.updateCategory = updateCategory;
const deleteCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield categoryRepository.findOneBy({ id });
    if (!category)
        return false;
    yield categoryRepository.remove(category);
    return true;
});
exports.deleteCategory = deleteCategory;
