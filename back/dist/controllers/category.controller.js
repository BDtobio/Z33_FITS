"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategory = exports.getCategories = void 0;
const categoryService = __importStar(require("../services/category.service"));
const getCategories = async (req, res) => {
    try {
        const categories = await categoryService.getAllCategories();
        res.status(200).json(categories);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener categorías' });
    }
};
exports.getCategories = getCategories;
const getCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await categoryService.getCategoryById(id);
        if (!category)
            return res.status(404).json({ message: 'Categoría no encontrada' });
        res.status(200).json(category);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener categoría' });
    }
};
exports.getCategory = getCategory;
const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name)
            return res.status(400).json({ message: 'El nombre es obligatorio' });
        const newCategory = await categoryService.createCategory(name);
        res.status(201).json(newCategory);
    }
    catch (error) {
        res.status(400).json({ message: 'Error al crear categoría' });
    }
};
exports.createCategory = createCategory;
const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updatedCategory = await categoryService.updateCategory(id, name);
        if (!updatedCategory)
            return res.status(404).json({ message: 'Categoría no encontrada' });
        res.status(200).json(updatedCategory);
    }
    catch (error) {
        res.status(400).json({ message: 'Error al actualizar categoría' });
    }
};
exports.updateCategory = updateCategory;
const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await categoryService.deleteCategory(id);
        if (!deleted)
            return res.status(404).json({ message: 'Categoría no encontrada' });
        res.status(200).json({ message: 'Categoría eliminada' });
    }
    catch (error) {
        res.status(400).json({ message: 'Error al eliminar categoría' });
    }
};
exports.deleteCategory = deleteCategory;
