import "reflect-metadata";
import { AppDataSource } from "./config/dataSource";
import app from "./server";
import { PORT } from "./config/envs";

const initialize = async () => {
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
