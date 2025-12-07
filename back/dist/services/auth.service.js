"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginService = exports.registerService = void 0;
const dataSource_1 = require("../config/dataSource");
const User_1 = require("../entities/User");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userRepository = dataSource_1.AppDataSource.getRepository(User_1.User);
const registerService = async (email, password) => {
    const existingUser = await userRepository.findOne({ where: { email } });
    if (existingUser)
        throw new Error("Este email ya está registrado");
    const hashedPassword = await bcryptjs_1.default.hash(password, 10);
    const user = userRepository.create({ email, password: hashedPassword });
    const savedUser = await userRepository.save(user);
    const token = jsonwebtoken_1.default.sign({ id: savedUser.id, email: savedUser.email, role: savedUser.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
    return { user: savedUser, token };
};
exports.registerService = registerService;
const loginService = async (email, password) => {
    const user = await userRepository.findOne({ where: { email } });
    if (!user)
        throw new Error("Email o contraseña incorrectos");
    const isValid = await bcryptjs_1.default.compare(password, user.password);
    if (!isValid)
        throw new Error("Email o contraseña incorrectos");
    const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
    return { user, token };
};
exports.loginService = loginService;
