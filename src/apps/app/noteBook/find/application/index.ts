import { FindNoteBooksMysqlRepository } from '../infrastructure/findNotebooksMysqlRepository';
import { GuardAppJwt } from '../../../shared/infrastructure/guard/guardJwt.midd';
import { FindNotebooksUseCase } from './findNotebooksUseCase';

const decodedKey = new GuardAppJwt();
const findNotebooksRepository = new FindNoteBooksMysqlRepository();
const findNotebooksUseCase = new FindNotebooksUseCase(findNotebooksRepository, decodedKey);

export { findNotebooksUseCase };
