import { FindNoteBooksMysqlRepository } from '../../find/infrastructure/findNotebooksMysqlRepository';
import { DeleteNotebookMySqlRepository } from '../infrastructure/deleteNotebookRepository';
import { GuardAppJwt } from '../../../shared/infrastructure/guard/guardJwt.midd';
import { DeleteNotebookUseCase } from './deleteNotebookUseCase';

const decodedKey = new GuardAppJwt();
const findNotebook = new FindNoteBooksMysqlRepository();
const deleteNotebookRepository = new DeleteNotebookMySqlRepository();

const deleteNotebookUseCase = new DeleteNotebookUseCase(deleteNotebookRepository, findNotebook, decodedKey);

export { deleteNotebookUseCase };
