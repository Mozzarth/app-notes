import { activeUserController } from '../../app/user/activeUser/infrastructure/activeUserController';
import { createUserController } from '../../app/user/createUser/infrastructure/createUserController';
import { createUserMidd } from '../middlewares/user/createUser.midd';
import { activeUserMidd } from '../middlewares/user/activeUser.midd';
import { Router } from 'express';

const userRouter = Router();

userRouter.post('', createUserMidd(), createUserController.handle.bind(createUserController));
userRouter.post('/active', activeUserMidd(), activeUserController.handle.bind(activeUserController));

export { userRouter };
