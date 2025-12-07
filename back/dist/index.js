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
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("Entities cargadas:", dataSource_1.AppDataSource.options.entities);
const initialize = async () => {
    console.log("DATABASE_URL:", process.env.DATABASE_URL);
    console.log("Initializing server");
    try {
        await dataSource_1.AppDataSource.initialize();
        console.log("Database initialized");
        server_1.default.listen(envs_1.PORT, () => {
            console.log(`Server running on port ${envs_1.PORT}`);
        });
    }
    catch (err) {
        console.error("❌ Error inicializando la DB:", err);
    }
};
initialize();
