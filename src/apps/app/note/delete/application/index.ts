import { FindNoteMysqlRepository } from './../../find/infrastructure/findNoteMysqlRepository';
import { DeleteNoteMysqlRepository } from './../infrastructure/deleteNoteMySqlRepository';
import { GuardAppJwt } from '../../../shared/infrastructure/guard/guardJwt.midd';
import { DeleteNoteUseCase } from './deleteNoteUseCase';

const guardJwt = new GuardAppJwt();
const findNote = new FindNoteMysqlRepository();
const deleteNote = new DeleteNoteMysqlRepository();
const deleteNoteUseCase = new DeleteNoteUseCase(guardJwt, findNote, deleteNote);

export { deleteNoteUseCase };
