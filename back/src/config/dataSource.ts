import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,

  entities: ["dist/entities/*.js"], // 🔥 Forzamos carga correcta

  synchronize: true,
  dropSchema: true, // 🔥 CREA TODAS LAS TABLAS DESDE CERO

  logging: true,

  ssl: { rejectUnauthorized: false },
});
