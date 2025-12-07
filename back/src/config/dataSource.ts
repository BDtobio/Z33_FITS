import "reflect-metadata";
import { DataSource } from "typeorm";

const isProd = process.env.NODE_ENV === "production";

console.log("🌐 MODO:", isProd ? "PRODUCCIÓN" : "DESARROLLO");

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,

  entities: isProd
    ? ["dist/entities/*.js"]
    : ["src/entities/*.ts"],

  synchronize: true,
  // ⚠️ SOLO para pruebas. Borrar después.
  dropSchema: false,

  logging: true,
  ssl: { rejectUnauthorized: false }
});
