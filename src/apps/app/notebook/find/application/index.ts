import { FindNoteBooksMysqlRepository } from '../infrastructure/notebook-find-mysql.repository';
import { GuardAppJwt } from '../../../shared/infrastructure/guard/guardJwt.midd';
import { FindNotebooksUseCase } from './notebook-find.usecase';

const decodedKey = new GuardAppJwt();
const findNotebooksRepository = new FindNoteBooksMysqlRepository();
const findNotebooksUseCase = new FindNotebooksUseCase(findNotebooksRepository, decodedKey);

export { findNotebooksUseCase };
