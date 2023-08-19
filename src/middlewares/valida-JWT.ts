import {Response } from "express";
import jwt,{JwtPayload,Secret} from 'jsonwebtoken';
import { CustomRequest } from "../interfaces/RequestInterfaces";

export const validarJWT=(req:CustomRequest,res:Response,next:Function)=>{
    
    const token=req.header('token') as string;

    if(!token){
        return res.status(401).json({
            ok:false,
            message:'No hay un token a renvoar'
        })
    }

    try{

        const seed=process.env.SECRET_SEED as string;
        const{name}=jwt.verify(token,seed) as JwtPayload;

        req.name=name;


    }catch(error){
        return res.status(401).json({
            ok:false,
            message:'Token no valido'
        })
    }

    next();


}