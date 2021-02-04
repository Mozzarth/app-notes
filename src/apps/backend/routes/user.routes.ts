import { Router } from 'express'
import { createUserController } from '../../app/user/createUser/infrastructure/createUserController'


const userRouter = Router()

userRouter.post("", createUserController.handle.bind(createUserController))

export { userRouter }