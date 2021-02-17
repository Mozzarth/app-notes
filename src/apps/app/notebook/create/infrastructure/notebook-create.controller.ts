import { CreateNoteBookUseCase } from '../application/notebook-create.usecase';
import { ICreateNoteBookDto } from '../application/notebook-create.dto';
import { NextFunction, Request, Response } from 'express';
import { createNotebook } from '../application';

class CreateNotebookController {
  private createNotebook: CreateNoteBookUseCase;
  constructor() {
    this.createNotebook = createNotebook;
  }
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const key = req.headers.authorization as string;
      const params: ICreateNoteBookDto = { title: req.body.title, key };
      const notebook = await this.createNotebook.handle(params);
      const response: any = notebook.toPrimitives();
      delete response.idUser;
      return res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }
}

const createNotebookController = new CreateNotebookController();

export { createNotebookController };
