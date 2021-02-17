import { activeUserController } from '../../app/user/active/infrastructure/user-active.controller';
import { createUserController } from '../../app/user/create/infrastructure/user-create.controller';
import { createUserMidd } from '../middlewares/user/user-create.midd';
import { activeUserMidd } from '../middlewares/user/user-active.midd';
import { Router } from 'express';

const userRouter = Router();

userRouter.post('', createUserMidd(), createUserController.handle.bind(createUserController));
userRouter.post('/active', activeUserMidd(), activeUserController.handle.bind(activeUserController));

export { userRouter };
