import { FindUserMySqlRepository } from '../../../user/find/infrastructure/user-find.repository';
import { CreateNotebookMysqlRepository } from '../infrastructure/notebook-create-mysql.repository';
import { GuardAppJwt } from '../../../shared/infrastructure/guard/guardJwt.midd';
import { CreateNoteBookUseCase } from './notebook-create.usecase';

const decodedKey = new GuardAppJwt();
const userFind = new FindUserMySqlRepository();
const createNotebookRepository = new CreateNotebookMysqlRepository();

const createNotebook = new CreateNoteBookUseCase(createNotebookRepository, userFind, decodedKey);

export { createNotebook };
