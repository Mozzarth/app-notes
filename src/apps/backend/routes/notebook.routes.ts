import { createNotebookController } from './../../app/noteBook/create/infrastructure/createNotebookController';
import { Router } from 'express';
import { createNotebookMid } from '../middlewares/notebook/createNotebook.midd';

const notebookRouter = Router();

notebookRouter.post('', createNotebookMid(), createNotebookController.handle.bind(createNotebookController));

export { notebookRouter };
