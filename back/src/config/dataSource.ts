import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,

  // 👇 Esto es lo correcto para proyectos TS
  entities: process.env.NODE_ENV === "production"
    ? ["dist/entities/*.js"]     // <- Railway usa JS compilado
    : ["src/entities/*.ts"],     // <- Local usa TS directamente

  synchronize: true,
  logging: false,

  // 👇 Railway SIEMPRE necesita SSL
  ssl: { rejectUnauthorized: false }
});
