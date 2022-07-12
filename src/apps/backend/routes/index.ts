import { userRouter } from './user.routes';
import { Router } from 'express';

const appRouter = Router();

appRouter.use('/user', userRouter);

export { appRouter };
