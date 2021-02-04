import { Router } from 'express'
import { activeUserController } from '../../app/user/activeUser/infrastructure/activeUserController'
import { createUserController } from '../../app/user/createUser/infrastructure/createUserController'


const userRouter = Router()

userRouter.post("", createUserController.handle.bind(createUserController))
userRouter.put("/active/:idUser",activeUserController​​.handle.bind(activeUserController​​))

export { userRouter }