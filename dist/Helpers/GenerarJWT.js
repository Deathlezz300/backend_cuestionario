"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generarJWT = (name) => {
    return new Promise((resolve, reject) => {
        const payload = { name };
        const seed = process.env.SECRET_SEED;
        jsonwebtoken_1.default.sign(payload, seed, {
            expiresIn: '24h'
        }, (error, token) => {
            if (error) {
                console.log(error);
                reject('No se pudo generar el token');
            }
            resolve(token);
        });
    });
};
exports.generarJWT = generarJWT;
//# sourceMappingURL=GenerarJWT.js.map