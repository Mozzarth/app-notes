import { NextFunction, Request, Response } from 'express';
import { findNotebooksUseCase } from '../application';
import { FindNotebooksUseCase } from '../application/findNotebooksUseCase';

class FindNotebooksController {
  constructor(private findUser: FindNotebooksUseCase) {}

  async byId(req: Request, res: Response, next: NextFunction) {
    try {
      const limit: number = req.query.limit as any;
      const page: number = req.query.page as any;
      const key = req.headers.authorization as string;
      const notebooks = await this.findUser.byIdUSer({ key, limit, page });
      return res.send(notebooks);
    } catch (error) {
      next(error);
    }
  }
}

const findNotebookController = new FindNotebooksController(findNotebooksUseCase);
export { findNotebookController };
