import "dotenv/config";
import "reflect-metadata";
import { AppDataSource } from "./config/dataSource";
import app from "./server";
import { PORT } from "./config/envs";

console.log("📦 Entities cargadas:", AppDataSource.options.entities);

const initializeServer = async () => {
  console.log("🔌 Configuración DB:", {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
  });

  console.log("🚀 Inicializando servidor...");

  try {
    await AppDataSource.initialize();
    console.log("📦 Base de datos inicializada con éxito");

    app.listen(PORT, () => {
      console.log(`🔥 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Error inicializando la DB:");
    console.error(err);
  }
};

initializeServer();
