import { CreateUserUseCase } from '../application/user-create.usecase';
import { createUserUseCase } from '../application/user-create.usecase';
import { NextFunction, Request, Response } from 'express';
import { IUserCreateDto } from '../application/user-create.dto';

class CreateUserController {
  constructor(private createUser: CreateUserUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const user: IUserCreateDto = req.body;
      const host = `${req.protocol}://${req.get('host')}/api/user/active`;
      const userCreated = await this.createUser.execute(user, host);
      let response: any = userCreated.toPrimitives();
      delete response.password;
      return res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }
}

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
