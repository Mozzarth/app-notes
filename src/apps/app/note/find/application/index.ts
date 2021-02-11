import { GuardAppJwt } from '../../../shared/infrastructure/guard/guardJwt.midd';
import { FindNoteMysqlRepository } from './../infrastructure/findNoteMysqlRepository';
import { FindNoteUseCase } from './findNoteUseCase';

const findNoteRepo = new FindNoteMysqlRepository();
const decodedKey = new GuardAppJwt();
const findNoteUseCase = new FindNoteUseCase(findNoteRepo, decodedKey);

export { findNoteUseCase };
