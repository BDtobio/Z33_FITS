"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const isProd = process.env.NODE_ENV === "production";
console.log("🌐 MODO:", isProd ? "PRODUCCIÓN" : "DESARROLLO");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: isProd
        ? ["dist/entities/*.js"] // 👈 Producción → JS compilado
        : ["src/entities/*.ts"], // 👈 Desarrollo → TypeScript
    synchronize: true,
    logging: true,
    ssl: { rejectUnauthorized: false }
});
