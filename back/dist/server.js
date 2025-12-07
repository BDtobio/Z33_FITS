"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const indexRouter_1 = __importDefault(require("./routes/indexRouter"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
// Rutas
app.use('/', indexRouter_1.default);
// Middleware de errores SIEMPRE al final
app.use((err, req, res, next) => {
    console.error("❌ ERROR:", err);
    res.status(err.statusCode || 500).json({
        status: "error",
        statusCode: err.statusCode || 500,
        message: err.message || "Internal Server Error",
    });
});
exports.default = app;
