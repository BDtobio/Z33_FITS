"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    // 👇 Esto es lo correcto para proyectos TS
    entities: process.env.NODE_ENV === "production"
        ? ["dist/entities/*.js"] // <- Railway usa JS compilado
        : ["src/entities/*.ts"], // <- Local usa TS directamente
    synchronize: true,
    logging: false,
    // 👇 Railway SIEMPRE necesita SSL
    ssl: { rejectUnauthorized: false }
});
