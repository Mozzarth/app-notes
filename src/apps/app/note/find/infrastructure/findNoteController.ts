import { FindNoteUseCase } from './../application/findNoteUseCase';
import { NextFunction, Request, Response } from 'express';

class FindNoteController {
  constructor(private findNoteUseCase: FindNoteUseCase) {}

  public async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const limit: number = req.query.limit as any;
      const page: number = req.query.page as any;
      const key = req.headers.authorization as string;
      const result = await this.findNoteUseCase.handle({ key, limit, page });
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
