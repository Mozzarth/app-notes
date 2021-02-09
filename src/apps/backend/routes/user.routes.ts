import { activeUserController } from '../../app/user/activeUser/infrastructure/activeUserController';
import { createUserController } from '../../app/user/createUser/infrastructure/createUserController';
import { Router } from 'express';
import { createUserMidd } from '../middlewares/user/createUser.midd';

const userRouter = Router();

userRouter.post('', createUserMidd(), createUserController.handle.bind(createUserController));
userRouter.put('/active/:idUser', activeUserController.handle.bind(activeUserController));

export { userRouter };
