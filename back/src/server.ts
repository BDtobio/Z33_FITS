import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import indexRouter from "./routes/indexRouter";
import morgan from "morgan";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Rutas
app.use('/', indexRouter);

// Middleware de errores SIEMPRE al final
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("❌ ERROR:", err);

  res.status(err.statusCode || 500).json({
    status: "error",
    statusCode: err.statusCode || 500,
    message: err.message || "Internal Server Error",
  });
});

export default app;
