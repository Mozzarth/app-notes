import { createNotebookController } from '../../app/notebook/create/infrastructure/createNotebookController';
import { findNotebookController } from '../../app/notebook/find/infrastructure/findNotebooksController';
import { createNotebookMid } from '../middlewares/notebook/createNotebook.midd';
import { findByIdUserMid } from '../middlewares/notebook/findNotebook.midd';
import { Router } from 'express';
import { deleteNotebookController } from '../../app/notebook/delete/infrastructure/deleteNotebookController';
import { deleteNotebook } from '../middlewares/notebook/deleteNotebook.midd';

const notebookRouter = Router();

notebookRouter.post('', createNotebookMid(), createNotebookController.handle.bind(createNotebookController));
notebookRouter.get('/', findByIdUserMid(), findNotebookController.byId.bind(findNotebookController));
notebookRouter.delete('/:idNotebook', deleteNotebook(), deleteNotebookController.handle.bind(deleteNotebookController));

export { notebookRouter };
