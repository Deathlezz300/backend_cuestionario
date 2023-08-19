import { Response,Request } from "express";
import { Pregunta, preguntas } from "../Utils/PreguntasData";
import { Respuesta, resultado } from "../interfaces/RequestInterfaces";
import { evaluarPregunta } from "../Utils/EvaluarPregunta";

const getPreguntas=(req:Request,res:Response)=>{

    const preguntasFull=preguntas.map(pregunta=>{
        
        const {correctas,...resto}=pregunta;

        return resto;
    })

    return res.status(200).json({
        ok:true,
        preguntas:preguntasFull
    })

}

const ValidateRespuestas=(req:Request,res:Response)=>{


    let {respuestas}=req.body as {respuestas:Respuesta[]};

    console.log(respuestas[0].respuestas);
    console.log(respuestas[1].respuestas);

    respuestas=respuestas.map(rest=>({...rest,id:parseInt(rest.id as string)}));


    console.log(respuestas[0].respuestas);
    console.log(respuestas[1].respuestas);

    let resultados:resultado[]=[];

    let nota=0;
    const valorPunto=5/8;

    for(let i=0;i<respuestas.length;i++){
        const pregunta=preguntas.find(pregu=>pregu.id===respuestas[i].id) as Pregunta;

        const resultadoPregunta=evaluarPregunta(pregunta,respuestas[i]);

        resultados.push({
            idPregunta:pregunta.id,
            idSelecciones:resultadoPregunta.selecciones,
            idCorrectas:pregunta.correctas,
        });

        if(resultadoPregunta.incorrectas>0){
            const calculo=(resultadoPregunta.correctas-resultadoPregunta.incorrectas)*(valorPunto/pregunta.correctas.length);
            nota+=calculo>0 ? calculo : 0;
        }else{
            nota+=resultadoPregunta.correctas*(valorPunto/pregunta.correctas.length);
        }

    }


    return res.status(200).json({
        ok:true,
        resultados,
        nota
    })

}

export {
    getPreguntas,
    ValidateRespuestas
}