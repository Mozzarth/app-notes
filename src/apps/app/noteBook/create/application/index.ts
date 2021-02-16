import { FindUserMySqlRepository } from '../../../user/findUser/infrastructure/findUserRepository';
import { CreateNotebookMysqlRepository } from '../infrastructure/createNotebookMysqlRepository';
import { GuardAppJwt } from '../../../shared/infrastructure/guard/guardJwt.midd';
import { CreateNoteBookUseCase } from './createNotebookUseCase';

const decodedKey = new GuardAppJwt();
const userFind = new FindUserMySqlRepository();
const createNotebookRepository = new CreateNotebookMysqlRepository();

const createNotebook = new CreateNoteBookUseCase(createNotebookRepository, userFind, decodedKey);

export { createNotebook };
