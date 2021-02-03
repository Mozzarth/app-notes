import { Router } from 'express'
import { createUserController } from '../../app/user/createUser/infrastructure/createUserController'


const userRouter = Router()

userRouter.put("",createUserController.handle.bind(createUserController))

export { userRouter }