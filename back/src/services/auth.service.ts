import { AppDataSource } from "../config/dataSource";
import { User } from "../entities/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userRepository = AppDataSource.getRepository(User);

export const registerService = async (
  name: string,
  email: string,
  password: string,
  birthdate: string
) => {

  const existingUser = await userRepository.findOne({ where: { email } });
  if (existingUser) throw new Error("Este email ya está registrado");

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = userRepository.create({
    name,
    email,
    password: hashedPassword,
    birthdate,
    role: "user",
  });

  const savedUser = await userRepository.save(newUser);

  const token = jwt.sign(
    { id: savedUser.id, email: savedUser.email, role: savedUser.role },
    process.env.JWT_SECRET || "secret123",
    { expiresIn: "7d" }
  );

  return {
    user: {
      id: savedUser.id,
      name: savedUser.name,
      email: savedUser.email,
      birthdate: savedUser.birthdate,
      role: savedUser.role,
    },
    token,
  };
};

export const loginService = async (email: string, password: string) => {
  const user = await userRepository.findOne({ where: { email } });
  if (!user) throw new Error("Email o contraseña incorrectos");

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) throw new Error("Email o contraseña incorrectos");

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET || "secret123",
    { expiresIn: "7d" }
  );

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      birthdate: user.birthdate,
      role: user.role,
    },
    token,
  };
};
