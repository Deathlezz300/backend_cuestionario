import { Request } from "express";

export interface CustomRequest extends Request{
    name?:string
}

export interface Respuesta{
    id:string | number,
    respuestas:number[]
}

export interface resultado{
    idPregunta:number,
    idSelecciones:seleccion[],
    idCorrectas:number[],
}

export interface seleccion{
    id:number,
    decision:boolean
}

export interface IevaluarPregunta{
    selecciones:seleccion[],
    correctas:number,
    incorrectas:number
}