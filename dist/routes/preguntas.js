"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const PreguntasController_1 = require("../controllers/PreguntasController");
const PreguntasRouter = (0, express_1.Router)();
//PreguntasRouter.use(validarJWT);
PreguntasRouter.get('/', PreguntasController_1.getPreguntas);
PreguntasRouter.post('/validar', [
    (0, express_validator_1.check)('respuestas', 'Las respuestas son obligatorias').not().isEmpty()
], PreguntasController_1.ValidateRespuestas);
exports.default = PreguntasRouter;
//# sourceMappingURL=preguntas.js.map