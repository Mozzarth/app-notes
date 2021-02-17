import { LoginUserUseCase } from '../application/user-login.usecase';
import { NextFunction, Request, Response } from 'express';
import { loginUseCase } from '../application';

class LoginUserController {
  constructor(private loginUseCase: LoginUserUseCase) {}
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const key = await this.loginUseCase.handle(email, password);
      return res.status(200).json({ key });
    } catch (error) {
      next(error);
    }
  }
}

const loginController = new LoginUserController(loginUseCase);

export { loginController };
