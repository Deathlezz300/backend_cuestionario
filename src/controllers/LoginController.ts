import { Response,Request } from "express"
import { CustomRequest } from "../interfaces/RequestInterfaces";
import { generarJWT } from "../Helpers/GenerarJWT";


const RenewToken=async(req:CustomRequest,res:Response)=>{

    const {name}=req as {name:string};

    const token=await generarJWT(name);

    res.status(200).json({
        ok:true,
        name,
        token
    })

}

const StartLogin=async(req:Request,res:Response)=>{

    const {name}=req.headers as {name:string};

    console.log(req.body);

    const token=await generarJWT(name);

    return res.status(200).json({
        ok:true,
        name,
        token
    })

}

const messageHola=(req:Request,res:Response)=>{
    return res.status(200).json({
        ok:true,
        message:'Hola'
    })
}

export {
    RenewToken,
    StartLogin,
    messageHola
}