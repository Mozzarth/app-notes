import { findNoteAllMidd, findNoteByIdNote, findNoteByIdNotebook } from '../middlewares/note/findNote.midd';
import { createNoteController } from '../../app/note/create/infrastructure/createNoteController';
import { deleteNoteController } from '../../app/note/delete/infrastructure/deleteNoteController';
import { findNoteController } from '../../app/note/find/infrastructure/findNoteController';
import { createNoteMidd } from '../middlewares/note/createNote.midd';
import { deleteNoteMidd } from '../middlewares/note/deleteNote.midd';
import { Router } from 'express';

const noteRouter = Router();

noteRouter.get('/notes/:idNotebook', findNoteByIdNotebook(), findNoteController.byIdNotebook.bind(findNoteController));
noteRouter.get('/notes', findNoteAllMidd(), findNoteController.all.bind(findNoteController));
noteRouter.get('/note/:idNote', findNoteByIdNote(), findNoteController.byIdNote.bind(findNoteController));
noteRouter.post('/note', createNoteMidd(), createNoteController.create.bind(createNoteController));
noteRouter.delete('/note/:idNote', deleteNoteMidd(), deleteNoteController.handle.bind(deleteNoteController));

export { noteRouter };
