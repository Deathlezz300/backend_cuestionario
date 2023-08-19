"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageHola = exports.StartLogin = exports.RenewToken = void 0;
const GenerarJWT_1 = require("../Helpers/GenerarJWT");
const RenewToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req;
    const token = yield (0, GenerarJWT_1.generarJWT)(name);
    res.status(200).json({
        ok: true,
        name,
        token
    });
});
exports.RenewToken = RenewToken;
const StartLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.headers;
    console.log(req.body);
    const token = yield (0, GenerarJWT_1.generarJWT)(name);
    return res.status(200).json({
        ok: true,
        name,
        token
    });
});
exports.StartLogin = StartLogin;
const messageHola = (req, res) => {
    return res.status(200).json({
        ok: true,
        message: 'Hola'
    });
};
exports.messageHola = messageHola;
//# sourceMappingURL=LoginController.js.map