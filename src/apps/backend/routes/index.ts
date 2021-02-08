import { notebookRouter } from './notebook.routes';
import { userRouter } from './user.routes';
import { Router } from 'express';

const appRouter = Router();

appRouter.use('/user', userRouter);
appRouter.use('/notebook', notebookRouter);

export { appRouter };
