import "reflect-metadata";
import { DataSource } from "typeorm";
import { Gender } from "../entities/Gender";
import { Product } from "../entities/Product";
import { Category } from "../entities/Category";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: [Product, Category, Gender],
  synchronize: true,
  logging: false,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false } // Railway
      : false, // Local
});
