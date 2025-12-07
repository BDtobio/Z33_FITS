import "dotenv/config"; 
import "reflect-metadata";
import { AppDataSource } from "./config/dataSource";
import app from "./server";
import { PORT } from "./config/envs";

console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("Entities cargadas:", AppDataSource.options.entities);

const initialize = async () => {
  console.log("DATABASE_URL:", process.env.DATABASE_URL); 
  console.log("Initializing server");
  
  try {
    await AppDataSource.initialize();
    console.log("Database initialized");
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Error inicializando la DB:", err);
  }
};

initialize();
