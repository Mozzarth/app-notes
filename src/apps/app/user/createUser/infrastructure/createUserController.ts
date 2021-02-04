import { createUserUseCase } from '../application/createUserUseCase';
import { CreateUserUseCase } from "./../application/createUserUseCase";
import { IUserDto } from '../application/userDto';
import { NextFunction, Request, Response } from 'express'


class CreateUserController {
    constructor(private createUser: CreateUserUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(req.url)
            const user: IUserDto = req.body
            const user_ = await this.createUser.execute(user)
            return res.status(201).json(user_)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }

