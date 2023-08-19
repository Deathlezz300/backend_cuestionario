import {Router} from 'express'
import { validarJWT } from '../middlewares/valida-JWT';
import { check } from 'express-validator';
import { ValidateRespuestas, getPreguntas } from '../controllers/PreguntasController';

const PreguntasRouter=Router();


//PreguntasRouter.use(validarJWT);


PreguntasRouter.get('/',getPreguntas)

PreguntasRouter.post('/validar',
    [
        check('respuestas','Las respuestas son obligatorias').not().isEmpty()
    ]
,ValidateRespuestas)


export default PreguntasRouter