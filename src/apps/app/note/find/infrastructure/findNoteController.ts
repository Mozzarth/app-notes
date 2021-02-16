import { FindNoteUseCase } from './../application/findNoteUseCase';
import { NextFunction, Request, Response } from 'express';
import { findNoteUseCase } from '../application';
import { Note } from '../../shared/domain/note';

class FindNoteController {
  constructor(private findNoteUseCase: FindNoteUseCase) {}

  public async all(req: Request, res: Response, next: NextFunction) {
    try {
      const limit: number = req.query.limit as any;
      const page: number = req.query.page as any;
      const key = req.headers.authorization as string;
      const notes = await this.findNoteUseCase.all({ key, limit, page });
      const response = notes == undefined ? undefined : this.responseNote(notes);
      return res.status(notes == undefined ? 204 : 200).json(response);
    } catch (error) {
      next(error);
    }
  }
  public async byIdNotebook(req: Request, res: Response, next: NextFunction) {
    try {
      const key = req.headers.authorization as string;
      const idNotebook = req.params.idNotebook;
      const notes = await this.findNoteUseCase.byIdNotebook({ key, idNotebook });
      const response = notes == undefined ? undefined : this.responseNote(notes);
      return res.status(notes == undefined ? 204 : 200).json(response);
    } catch (error) {
      next(error);
    }
  }
  public async byIdNote(req: Request, res: Response, next: NextFunction) {
    try {
      const key = req.headers.authorization as string;
      const idNote = req.params.idNote;
      const note = await this.findNoteUseCase.byId({ key, idNote });
      const response = note == undefined ? undefined : this.responseNote([note]);
      return res.status(note == undefined ? 204 : 200).json(response);
    } catch (error) {
      next(error);
    }
  }

  private responseNote(notes: Note[]) {
    return notes.map(note => note.toPrimitives());
  }
}

const findNoteController = new FindNoteController(findNoteUseCase);

export { findNoteController };
