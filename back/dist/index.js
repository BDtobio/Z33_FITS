"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("reflect-metadata");
const dataSource_1 = require("./config/dataSource");
const server_1 = __importDefault(require("./server"));
const envs_1 = require("./config/envs");
console.log("📦 Entities cargadas:", dataSource_1.AppDataSource.options.entities);
const initializeServer = async () => {
    console.log("🔌 Configuración DB:", {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        database: process.env.DB_DATABASE,
    });
    console.log("🚀 Inicializando servidor...");
    try {
        await dataSource_1.AppDataSource.initialize();
        console.log("📦 Base de datos inicializada con éxito");
        server_1.default.listen(envs_1.PORT, () => {
            console.log(`🔥 Server running on port ${envs_1.PORT}`);
        });
    }
    catch (err) {
        console.error("❌ Error inicializando la DB:");
        console.error(err);
    }
};
initializeServer();
