import { Request, Response } from "express";
import { registerService} from "../services/auth.service";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, birthdate } = req.body;

    if (!name || !email || !password || !birthdate) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    const result = await registerService(name, email, password, birthdate);
    res.status(201).json(result);

  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Email y contraseña obligatorios" });

    // ⭐ VALIDACIÓN ÚNICAMENTE DE ADMIN
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(
        { email: process.env.ADMIN_EMAIL, role: "admin" },
        process.env.JWT_SECRET || "secret123",
        { expiresIn: "7d" }
      );

      return res.json({
        message: "Bienvenido administrador",
        token,
        isAdmin: true,
      });
    }

    return res.status(401).json({
      message: "Credenciales incorrectas",
    });

  } catch (error: any) {
    res.status(500).json({ message: "Error en el servidor" });
  }
};
