import { NextFunction, Response, Request } from 'express-serve-static-core';
import { deleteNoteUseCase } from '../application';
import { DeleteNoteUseCase } from '../application/deleteNoteUseCase';

class DeleteNoteController {
  constructor(private useCase: DeleteNoteUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const key = req.headers.authorization as string;
      const idNote = req.params.idNote;
      await this.useCase.handle({ key, idNote });
      return res.status(200).end();
    } catch (error) {
      next(error);
    }
  }
}

const deleteNoteController = new DeleteNoteController(deleteNoteUseCase);
export { deleteNoteController };
