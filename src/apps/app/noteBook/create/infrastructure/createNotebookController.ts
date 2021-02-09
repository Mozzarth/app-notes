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
      const params: ICreateNoteBookDto = req.body;
      const notebook = await this.createNotebook.handle(params);
      return res.status(201).json({
        userId: notebook.userId.value,
        id: notebook.id.value,
        title: notebook.title,
      });
    } catch (error) {
      next(error);
    }
  }
}

const createNotebookController = new CreateNotebookController();

export { createNotebookController };
