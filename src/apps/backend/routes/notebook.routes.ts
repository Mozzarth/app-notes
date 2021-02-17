import { deleteNotebookController } from '../../app/notebook/delete/infrastructure/notebook-delete.controller';
import { createNotebookController } from '../../app/notebook/create/infrastructure/notebook-create.controller';
import { findNotebookController } from '../../app/notebook/find/infrastructure/notebook-find.controller';
import { findAllMidd, findById } from '../middlewares/notebook/notebook-find.midd';
import { createNotebookMid } from '../middlewares/notebook/notebook-create.midd';
import { deleteNotebook } from '../middlewares/notebook/notebook-delete.midd';
import { Router } from 'express';

const notebookRouter = Router();

notebookRouter.post('', createNotebookMid(), createNotebookController.handle.bind(createNotebookController));
notebookRouter.get('/all', findAllMidd(), findNotebookController.all.bind(findNotebookController));
notebookRouter.get('/:idNotebook', findById(), findNotebookController.byIdNotebook.bind(findNotebookController));
notebookRouter.delete('/:idNotebook', deleteNotebook(), deleteNotebookController.handle.bind(deleteNotebookController));

export { notebookRouter };
