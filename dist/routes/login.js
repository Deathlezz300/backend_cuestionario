"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const valida_JWT_1 = require("../middlewares/valida-JWT");
const LoginController_1 = require("../controllers/LoginController");
const LoginRouter = (0, express_1.Router)();
LoginRouter.post('/', [
    (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').not().isEmpty(),
], LoginController_1.StartLogin);
LoginRouter.get('/renovar', valida_JWT_1.validarJWT, LoginController_1.RenewToken);
LoginRouter.get('/hola', LoginController_1.messageHola);
exports.default = LoginRouter;
//# sourceMappingURL=login.js.map