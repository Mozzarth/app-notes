import { createNoteController } from '../../app/note/create/infrastructure/createNoteController';
import { findNoteController } from '../../app/note/find/infrastructure/findNoteController';
import { findNoteAllMidd, findNoteByIdNotebook } from '../middlewares/note/findNote.midd';
import { createNoteMidd } from '../middlewares/note/createNote.midd';
import { Router } from 'express';

const noteRouter = Router();

noteRouter.post('', createNoteMidd(), createNoteController.create.bind(createNoteController));
noteRouter.get('/:idNotebook', findNoteByIdNotebook(), findNoteController.byIdNotebook.bind(findNoteController));
noteRouter.get('', findNoteAllMidd(), findNoteController.all.bind(findNoteController));

export { noteRouter };
