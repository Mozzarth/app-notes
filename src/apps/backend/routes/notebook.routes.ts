import { createNotebookController } from './../../app/noteBook/create/infrastructure/createNotebookController';
import { Router } from 'express';

const notebookRouter = Router();

notebookRouter.post('', createNotebookController.handle.bind(createNotebookController));

export { notebookRouter };
