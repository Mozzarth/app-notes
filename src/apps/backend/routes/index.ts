import { notebookRouter } from './notebook.routes';
import { userRouter } from './user.routes';
import { Router } from 'express';
import { authRouter } from './auth.routes';
import { keyValidate } from '../middlewares/shared/keyValidate';
import { noteRouter } from './note.routes';

const appRouter = Router();

appRouter.use('/login', authRouter);
appRouter.use('/user', userRouter);
appRouter.use(keyValidate());

appRouter.use('/notebook', notebookRouter);
appRouter.use('/note', noteRouter);

export { appRouter };
