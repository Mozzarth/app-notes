import { createUserUseCase } from '../application/createUserUseCase';
import { CreateUserUseCase } from './../application/createUserUseCase';
import { IUserDto } from '../application/userDto';
import { NextFunction, Request, Response } from 'express';

class CreateUserController {
  constructor(private createUser: CreateUserUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.url);
      const user: IUserDto = req.body;
      const user_ = await this.createUser.execute(user);
      const response = { id: user_.id.value, email: user_.email.toString() };
      return res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }
}

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
