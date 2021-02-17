import { NextFunction, Request, Response } from 'express';
import { DeleteNotebookUseCase } from '../application/notebook-delete.usecase';
import { deleteNotebookUseCase } from '../application';

class DeleteNotebookController {
  constructor(private deleteNotebookUseCase: DeleteNotebookUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const key = req.headers.authorization as string;
      const idNotebook = req.params.idNotebook;
      await this.deleteNotebookUseCase.handle({ idNotebook: idNotebook, key });
      return res.status(200).end();
    } catch (error) {
      next(error);
    }
  }
}

const deleteNotebookController = new DeleteNotebookController(deleteNotebookUseCase);
export { deleteNotebookController };
