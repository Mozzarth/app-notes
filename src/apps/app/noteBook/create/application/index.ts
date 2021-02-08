import { CreateNotebookMysqlRepository } from '../infrastructure/createNotebookMysqlRepository';
import { FindUserRepository } from './../../../user/findUser/infrastructure/findUserRepository';
import { CreateNoteBookUseCase } from './createNoteBookUseCase';

const createNotebookRepository = new CreateNotebookMysqlRepository();
const userFind = new FindUserRepository();
const createNotebook = new CreateNoteBookUseCase(createNotebookRepository, userFind);

export { createNotebook };
