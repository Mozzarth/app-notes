import { FindNoteBooksMysqlRepository } from '../../../notebook/find/infrastructure/findNotebooksMysqlRepository';
import { FindUserMySqlRepository } from '../../../user/findUser/infrastructure/findUserRepository';
import { CreateNoteMysqlRepository } from '../infrastructure/createNoteMysqlRepository';
import { GuardAppJwt } from '../../../shared/infrastructure/guard/guardJwt.midd';
import { CreateNoteUseCase } from './createNoteUseCase';

const createNoteRepository = new CreateNoteMysqlRepository();
const userFindRepository = new FindUserMySqlRepository();
const notebookFind = new FindNoteBooksMysqlRepository();
const decodedKey = new GuardAppJwt();

const createNoteUseCase = new CreateNoteUseCase(createNoteRepository, userFindRepository, notebookFind, decodedKey);

export { createNoteUseCase };
