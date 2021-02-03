import { createUserUseCase } from '../application/createUserUseCase';
import { CreateUserUseCase } from "./../application/createUserUseCase";
import { IUserDto } from '../application/userDto';
import { NextFunction, Request, Response } from 'express'


class CreateUserController {
    constructor(private createUSer: CreateUserUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        try {
            const user: IUserDto = req.body
            const user_ = await this.createUSer.execute(user)
            return res.status(200).json(user_)
        } catch (error) {
            return res.json(error.message)
        }
    }
}

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }

