import { Application } from "express";
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import LoginRouter from "./routes/login";
import PreguntasRouter from "./routes/preguntas";

export class Server{

    private app:Application;
    private puerto:string;

    constructor(){
        this.app=express();
        dotenv.config();
        this.puerto=process.env.PORT || '8000';
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.listen();
        this.Routes();
    }

    listen(){
        this.app.listen(this.puerto,()=>console.log(`Servidor corriendo en el puerto ${this.puerto}`))  
    }

    Routes(){
        this.app.use('/api/auth',LoginRouter);
        this.app.use('/api/preguntas',PreguntasRouter)
    }

}