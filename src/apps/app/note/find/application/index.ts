import { GuardAppJwt } from '../../../shared/infrastructure/guard/guardJwt.midd';
import { FindNoteMysqlRepository } from '../infrastructure/note-find-mysql.repository';
import { FindNoteUseCase } from './note-find.usecase';

const findNoteRepo = new FindNoteMysqlRepository();
const decodedKey = new GuardAppJwt();
const findNoteUseCase = new FindNoteUseCase(findNoteRepo, decodedKey);

export { findNoteUseCase };
