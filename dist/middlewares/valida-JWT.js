"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validarJWT = (req, res, next) => {
    const token = req.header('token');
    if (!token) {
        return res.status(401).json({
            ok: false,
            message: 'No hay un token a renvoar'
        });
    }
    try {
        const seed = process.env.SECRET_SEED;
        const { name } = jsonwebtoken_1.default.verify(token, seed);
        req.name = name;
    }
    catch (error) {
        return res.status(401).json({
            ok: false,
            message: 'Token no valido'
        });
    }
    next();
};
exports.validarJWT = validarJWT;
//# sourceMappingURL=valida-JWT.js.map