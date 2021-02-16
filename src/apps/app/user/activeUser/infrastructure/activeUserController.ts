import { ActiveUserUseCase } from '../application/activeUserUseCase';
import { NextFunction, Request, Response } from 'express';
import { activeUser } from '../application';

class ActiveUserController {
  constructor(private activeUser: ActiveUserUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const idUser: string = req.body.idUser;
      // console.log(req.protocol, req.get("host"),req.originalUrl)
      await this.activeUser.execute(idUser);
      return res.status(202).end();
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}
const activeUserController = new ActiveUserController(activeUser);
export { activeUserController };
