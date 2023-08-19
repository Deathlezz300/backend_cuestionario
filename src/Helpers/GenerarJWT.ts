import jwt from 'jsonwebtoken';

export const generarJWT=(name:string)=>{

    return new Promise((resolve,reject)=>{

        const payload={name};

        const seed=process.env.SECRET_SEED as string;


        jwt.sign(payload,seed,{
            expiresIn:'24h'
        },(error,token)=>{

            if(error){
                console.log(error)
                reject('No se pudo generar el token');
            }

            resolve(token);
        });


    });
}
