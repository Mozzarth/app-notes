import { NextFunction, Request, Response } from 'express';
import { Notebook } from '../../shared/domain/notebook';
import { findNotebooksUseCase } from '../application';
import { FindNotebooksUseCase } from '../application/findNotebooksUseCase';

class FindNotebooksController {
  constructor(private findUser: FindNotebooksUseCase) {}

  async all(req: Request, res: Response, next: NextFunction) {
    try {
      const limit: number = req.query.limit as any;
      const page: number = req.query.page as any;
      const key = req.headers.authorization as string;
      const notebooks = await this.findUser.all({ key, limit, page });
      const response = notebooks == undefined ? undefined : this.notebookResponse(notebooks);
      return res.status(notebooks == undefined ? 204 : 200).json(response);
    } catch (error) {
      next(error);
    }
  }

  async byIdNotebook(req: Request, res: Response, next: NextFunction) {
    try {
      const key = req.headers.authorization as string;
      const idNotebook = req.params.idNotebook;
      const notebook = await this.findUser.byId({ key, idNotebook });
      const response = notebook == undefined ? undefined : this.notebookResponse([notebook]);
      return res.status(notebook == undefined ? 204 : 200).json(response);
    } catch (error) {
      next(error);
    }
  }

  private notebookResponse(notebooks: Notebook[]) {
    return notebooks.map(notebook => {
      const temp: any = notebook.toPrimitives();
      delete temp.idUser;
      return temp;
    });
  }
}

const findNotebookController = new FindNotebooksController(findNotebooksUseCase);
export { findNotebookController };
