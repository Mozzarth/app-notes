import { Router } from 'express'
import { routerNotFound } from '../middlewares'

const appRouter = Router()
appRouter.use(routerNotFound)

export { appRouter }