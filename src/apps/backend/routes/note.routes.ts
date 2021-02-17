import { findNoteAllMidd, findNoteByIdNote, findNoteByIdNotebook } from '../middlewares/note/note-find.midd';
import { createNoteController } from '../../app/note/create/infrastructure/note-create.controller';
import { deleteNoteController } from '../../app/note/delete/infrastructure/note-delete.controller';
import { findNoteController } from '../../app/note/find/infrastructure/note-find.controller';
import { createNoteMidd } from '../middlewares/note/note-create.midd';
import { deleteNoteMidd } from '../middlewares/note/note-delete.midd';
import { Router } from 'express';

const noteRouter = Router();

noteRouter.get(
  '/notebook/:idNotebook',
  findNoteByIdNotebook(),
  findNoteController.byIdNotebook.bind(findNoteController)
);
noteRouter.get('/all', findNoteAllMidd(), findNoteController.all.bind(findNoteController));
noteRouter.get('/:idNote', findNoteByIdNote(), findNoteController.byIdNote.bind(findNoteController));
noteRouter.post('', createNoteMidd(), createNoteController.create.bind(createNoteController));
noteRouter.delete('/:idNote', deleteNoteMidd(), deleteNoteController.handle.bind(deleteNoteController));

export { noteRouter };
