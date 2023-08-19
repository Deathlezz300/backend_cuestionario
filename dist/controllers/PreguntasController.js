"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateRespuestas = exports.getPreguntas = void 0;
const PreguntasData_1 = require("../Utils/PreguntasData");
const EvaluarPregunta_1 = require("../Utils/EvaluarPregunta");
const getPreguntas = (req, res) => {
    const preguntasFull = PreguntasData_1.preguntas.map(pregunta => {
        const { correctas } = pregunta, resto = __rest(pregunta, ["correctas"]);
        return resto;
    });
    return res.status(200).json({
        ok: true,
        preguntas: preguntasFull
    });
};
exports.getPreguntas = getPreguntas;
const ValidateRespuestas = (req, res) => {
    let { respuestas } = req.body;
    console.log(respuestas[0].respuestas);
    console.log(respuestas[1].respuestas);
    respuestas = respuestas.map(rest => (Object.assign(Object.assign({}, rest), { id: parseInt(rest.id) })));
    console.log(respuestas[0].respuestas);
    console.log(respuestas[1].respuestas);
    let resultados = [];
    let nota = 0;
    const valorPunto = 5 / 8;
    for (let i = 0; i < respuestas.length; i++) {
        const pregunta = PreguntasData_1.preguntas.find(pregu => pregu.id === respuestas[i].id);
        const resultadoPregunta = (0, EvaluarPregunta_1.evaluarPregunta)(pregunta, respuestas[i]);
        resultados.push({
            idPregunta: pregunta.id,
            idSelecciones: resultadoPregunta.selecciones,
            idCorrectas: pregunta.correctas,
        });
        if (resultadoPregunta.incorrectas > 0) {
            const calculo = (resultadoPregunta.correctas - resultadoPregunta.incorrectas) * (valorPunto / pregunta.correctas.length);
            nota += calculo > 0 ? calculo : 0;
        }
        else {
            nota += resultadoPregunta.correctas * (valorPunto / pregunta.correctas.length);
        }
    }
    return res.status(200).json({
        ok: true,
        resultados,
        nota
    });
};
exports.ValidateRespuestas = ValidateRespuestas;
//# sourceMappingURL=PreguntasController.js.map