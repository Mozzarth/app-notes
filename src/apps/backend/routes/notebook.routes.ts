import { deleteNotebookController } from '../../app/notebook/delete/infrastructure/deleteNotebookController';
import { createNotebookController } from '../../app/notebook/create/infrastructure/createNotebookController';
import { findNotebookController } from '../../app/notebook/find/infrastructure/findNotebooksController';
import { createNotebookMid } from '../middlewares/notebook/createNotebook.midd';
import { deleteNotebook } from '../middlewares/notebook/deleteNotebook.midd';
import { findAllMidd, findById } from '../middlewares/notebook/findNotebook.midd';
import { Router } from 'express';

const notebookRouter = Router();

notebookRouter.post('', createNotebookMid(), createNotebookController.handle.bind(createNotebookController));
notebookRouter.delete('/:idNotebook', deleteNotebook(), deleteNotebookController.handle.bind(deleteNotebookController));

notebookRouter.get('/', findAllMidd(), findNotebookController.all.bind(findNotebookController));
notebookRouter.get('/:idNotebook', findById(), findNotebookController.byIdNotebook.bind(findNotebookController));

export { notebookRouter };
