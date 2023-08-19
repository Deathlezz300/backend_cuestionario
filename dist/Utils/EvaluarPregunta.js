"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluarPregunta = void 0;
const evaluarPregunta = (pregunta, respuesta) => {
    let resultados = [];
    let correctas = 0;
    for (let i = 0; i < respuesta.respuestas.length; i++) {
        let valor = false;
        if (pregunta.correctas.includes(respuesta.respuestas[i])) {
            valor = true;
            correctas++;
        }
        resultados.push({
            id: respuesta.respuestas[i],
            decision: valor
        });
    }
    return {
        selecciones: resultados,
        correctas: correctas,
        incorrectas: respuesta.respuestas.length - correctas
    };
};
exports.evaluarPregunta = evaluarPregunta;
//# sourceMappingURL=EvaluarPregunta.js.map