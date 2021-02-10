import { createNotebookController } from '../../app/notebook/create/infrastructure/createNotebookController';
import { findNotebookController } from '../../app/notebook/find/infrastructure/findNotebooksController';
import { createNotebookMid } from '../middlewares/notebook/createNotebook.midd';
import { findByIdUserMid } from '../middlewares/notebook/findNotebook.midd';
import { Router } from 'express';

const notebookRouter = Router();

notebookRouter.post('', createNotebookMid(), createNotebookController.handle.bind(createNotebookController));
notebookRouter.get('/', findByIdUserMid(), findNotebookController.byId.bind(findNotebookController));

export { notebookRouter };
