import {Router} from 'express'
import {check} from 'express-validator'
import { validarJWT } from '../middlewares/valida-JWT';
import { RenewToken, StartLogin, messageHola } from '../controllers/LoginController';

const LoginRouter=Router();


LoginRouter.post('/',
    [
        check('nombre','El nombre es obligatorio').not().isEmpty(),
    ],StartLogin)

LoginRouter.get('/renovar',validarJWT,RenewToken);

LoginRouter.get('/hola',messageHola)

export default LoginRouter;