import { NextFunction, Request, Response } from 'express-serve-static-core';
import { CreateNoteUseCase } from '../application/createNoteUseCase';
import { createNoteUseCase } from '../application';

class CreateNoteController {
  constructor(private createNoteUseCase: CreateNoteUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const key = req.headers.authorization as string;
      const note = req.body.note;
      const idNotebook = req.body.idNotebook;
      const note_ = await this.createNoteUseCase.handle({ key, note, idNotebook });
      return res.status(200).json({ idNote: note_.idNote.value, note: note_.note });
    } catch (error) {
      next(error);
    }
  }
}

const createNoteController = new CreateNoteController(createNoteUseCase);

export { createNoteController };
