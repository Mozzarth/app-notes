import { FindNoteBooksMysqlRepository } from '../../find/infrastructure/notebook-find-mysql.repository';
import { DeleteNotebookMySqlRepository } from '../infrastructure/notebook-delete.repository';
import { GuardAppJwt } from '../../../shared/infrastructure/guard/guardJwt.midd';
import { DeleteNotebookUseCase } from './notebook-delete.usecase';

const decodedKey = new GuardAppJwt();
const findNotebook = new FindNoteBooksMysqlRepository();
const deleteNotebookRepository = new DeleteNotebookMySqlRepository();

const deleteNotebookUseCase = new DeleteNotebookUseCase(deleteNotebookRepository, findNotebook, decodedKey);

export { deleteNotebookUseCase };
