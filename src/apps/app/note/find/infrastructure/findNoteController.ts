import { FindNoteUseCase } from './../application/findNoteUseCase';
import { NextFunction, Request, Response } from 'express';
import { findNoteUseCase } from '../application';

class FindNoteController {
  constructor(private findNoteUseCase: FindNoteUseCase) {}

  public async all(req: Request, res: Response, next: NextFunction) {
    try {
      const limit: number = req.query.limit as any;
      const page: number = req.query.page as any;
      const key = req.headers.authorization as string;
      const result = await this.findNoteUseCase.all({ key, limit, page });
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
  public async byIdNotebook(req: Request, res: Response, next: NextFunction) {
    try {
      const key = req.headers.authorization as string;
      const idNotebook = req.params.idNotebook;
      const result = await this.findNoteUseCase.byIdNotebook({ key, idNotebook });
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

const findNoteController = new FindNoteController(findNoteUseCase);

export { findNoteController };
