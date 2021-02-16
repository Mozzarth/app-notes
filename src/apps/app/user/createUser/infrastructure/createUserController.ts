import { CreateUserUseCase } from './../application/createUserUseCase';
import { createUserUseCase } from '../application/createUserUseCase';
import { NextFunction, Request, Response } from 'express';
import { IUserDto } from '../application/userDto';

class CreateUserController {
  constructor(private createUser: CreateUserUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const user: IUserDto = req.body;
      const host = `${req.protocol}://${req.get('host')}/api/user/active`;
      const userCreated = await this.createUser.execute(user, host);
      return res.status(201).json(userCreated);
    } catch (error) {
      next(error);
    }
  }
}

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
