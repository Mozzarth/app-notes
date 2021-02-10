import { CreateNoteBookUseCase } from './../application/createNoteBookUseCase';
import { ICreateNoteBookDto } from '../application/createNoteBookDto';
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
      return res.status(201).json({
        idNotebook: notebook.idNotebook.value,
        title: notebook.title,
      });
    } catch (error) {
      next(error);
    }
  }
}

const createNotebookController = new CreateNotebookController();

export { createNotebookController };
