import { NextFunction, Request, Response } from 'express';
import { findNotebooksUseCase } from '../application';
import { FindNotebooksUseCase } from '../application/findNotebooksUseCase';

class FindNotebooksController {
  constructor(private findUser: FindNotebooksUseCase) {}

  async byId(req: Request, res: Response, next: NextFunction) {
    try {
      const idUser: string = 'a9ed25e5-f608-4c55-a2d1-169aad6bd0ed';
      // const idUser: string = req.params.idUser
      const limit: number = req.query.limit as any;
      const page: number = req.query.page as any;
      const notebooks = await this.findUser.byIdUSer({ idUser, limit, page });
      return res.send(notebooks);
    } catch (error) {
      next(error);
    }
  }
}

const findNotebookController = new FindNotebooksController(findNotebooksUseCase);
export { findNotebookController };
