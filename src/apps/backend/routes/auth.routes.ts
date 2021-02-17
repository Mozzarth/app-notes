import { loginController } from '../../app/login/infrastructure/user-login.controller';
import { loginMidd } from '../middlewares/login/login.midd';
import { Router } from 'express';

const authRouter = Router();
authRouter.post('', loginMidd(), loginController.handle.bind(loginController));

export { authRouter };
