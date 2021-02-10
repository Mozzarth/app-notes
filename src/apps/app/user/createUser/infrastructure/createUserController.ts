import { createUserUseCase } from '../application/createUserUseCase';
import { CreateUserUseCase } from './../application/createUserUseCase';
import { IUserDto } from '../application/userDto';
import { NextFunction, Request, Response } from 'express';

class CreateUserController {
  constructor(private createUser: CreateUserUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const user: IUserDto = req.body;
      await this.createUser.execute(user);
      return res.status(201).send('User created');
    } catch (error) {
      next(error);
    }
  }
}

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
