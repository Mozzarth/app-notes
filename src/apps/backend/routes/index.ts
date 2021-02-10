import { notebookRouter } from './notebook.routes';
import { userRouter } from './user.routes';
import { Router } from 'express';
import { authRouter } from './auth.routes';
import { keyValidate } from '../middlewares/shared/keyValidate';

const appRouter = Router();

appRouter.use('/login', authRouter);
appRouter.use('/user', userRouter);

appRouter.use(keyValidate());
appRouter.use('/notebook', notebookRouter);

export { appRouter };
