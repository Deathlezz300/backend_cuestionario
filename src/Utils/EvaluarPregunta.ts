import { Respuesta, IevaluarPregunta, seleccion } from "../interfaces/RequestInterfaces";
import { Pregunta } from './PreguntasData';

export const evaluarPregunta=(pregunta:Pregunta,respuesta:Respuesta):IevaluarPregunta=>{


    let resultados:seleccion[]=[];
    let correctas=0;

    for(let i=0;i<respuesta.respuestas.length;i++){
        let valor=false;
        if(pregunta.correctas.includes(respuesta.respuestas[i])){
            valor=true;
            correctas++;
        }

        resultados.push({
            id:respuesta.respuestas[i],
            decision:valor
        })
    }


    return{
        selecciones:resultados,
        correctas:correctas,
        incorrectas:respuesta.respuestas.length-correctas
    }
    

}