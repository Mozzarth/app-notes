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
      await this.createNotebook.handle(params);
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}

const createNotebookController = new CreateNotebookController();

export { createNotebookController };
