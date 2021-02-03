import { routerNotFound } from '../middlewares'
import { Router } from 'express'
import {userRouter} from './user.routes'

const appRouter = Router()

appRouter.use("/user", userRouter)

export { appRouter }