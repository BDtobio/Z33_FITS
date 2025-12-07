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
exports.getProductsByCategoryController = exports.deleteProduct = exports.getProductsByGenderController = exports.updateProduct = exports.createProduct = exports.getProduct = exports.getProducts = void 0;
const productService = __importStar(require("../services/product.service"));
const getProducts = async (req, res) => {
    try {
        const products = await productService.findAll();
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching products" });
    }
};
exports.getProducts = getProducts;
const getProduct = async (req, res) => {
    try {
        const product = await productService.findById(req.params.id);
        if (!product)
            return res.status(404).json({ message: "Producto no encontrado" });
        res.json(product);
    }
    catch {
        res.status(500).json({ error: "Error fetching product" });
    }
};
exports.getProduct = getProduct;
const createProduct = async (req, res) => {
    try {
        const newProduct = await productService.createProduct(req.body);
        res.status(201).json(newProduct);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.createProduct = createProduct;
const updateProduct = async (req, res) => {
    try {
        const updated = await productService.updateProduct(req.params.id, req.body);
        if (!updated)
            return res.status(404).json({ message: "Producto no encontrado" });
        res.json(updated);
    }
    catch {
        res.status(400).json({ error: "Error updating product" });
    }
};
exports.updateProduct = updateProduct;
const getProductsByGenderController = async (req, res) => {
    try {
        const { genderId } = req.params;
        const products = await productService.getProductsByGender(genderId);
        res.status(200).json(products);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener productos por género" });
    }
};
exports.getProductsByGenderController = getProductsByGenderController;
const deleteProduct = async (req, res) => {
    try {
        await productService.deleteProduct(req.params.id);
        res.json({ message: "Producto eliminado" });
    }
    catch {
        res.status(400).json({ error: "Error deleting product" });
    }
};
exports.deleteProduct = deleteProduct;
const getProductsByCategoryController = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const products = await productService.getProductsByCategory(categoryId);
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: "Error al obtener productos por categoría" });
    }
};
exports.getProductsByCategoryController = getProductsByCategoryController;
