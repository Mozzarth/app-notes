import { FindNoteBooksMysqlRepository } from '../../../notebook/find/infrastructure/notebook-find-mysql.repository';
import { FindUserMySqlRepository } from '../../../user/find/infrastructure/user-find.repository';
import { CreateNoteMysqlRepository } from '../infrastructure/note-create-mysql.repository';
import { GuardAppJwt } from '../../../shared/infrastructure/guard/guardJwt.midd';
import { CreateNoteUseCase } from './note-create.usecase';

const createNoteRepository = new CreateNoteMysqlRepository();
const userFindRepository = new FindUserMySqlRepository();
const notebookFind = new FindNoteBooksMysqlRepository();
const decodedKey = new GuardAppJwt();

const createNoteUseCase = new CreateNoteUseCase(createNoteRepository, userFindRepository, notebookFind, decodedKey);

export { createNoteUseCase };
