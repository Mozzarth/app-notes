import { createUserController } from '../../app/user/create/infrastructure/user-create.controller';
import { loginController } from '../../app/user/login/infrastructure/user-login.controller';
import { createUserMidd } from '../middlewares/user/user-create.midd';
import { keyValidate } from '../middlewares/shared/key-validate.midd';
import { loginMidd } from '../middlewares/login/login.midd';
import { Router } from 'express';


const userRouter = Router();

userRouter.post('', createUserMidd(), createUserController.handle.bind(createUserController));
userRouter.post('/login', loginMidd(), loginController.handle.bind(loginController));
userRouter.post('/who', keyValidate(), ); // TODO Crear controller que retorne el usuaio

export { userRouter };
