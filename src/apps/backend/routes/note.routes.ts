import { createNoteController } from '../../app/note/create/infrastructure/createNoteController';
import { createNoteMidd } from '../middlewares/note/createNote.midd';
import { Router } from 'express';

const noteRouter = Router();

noteRouter.post('', createNoteMidd(), createNoteController.handle.bind(createNoteController));

export { noteRouter };
