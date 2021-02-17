import { FindNoteMysqlRepository } from '../../find/infrastructure/note-find-mysql.repository';
import { DeleteNoteMysqlRepository } from '../infrastructure/note-delete-myslq.repository';
import { GuardAppJwt } from '../../../shared/infrastructure/guard/guardJwt.midd';
import { DeleteNoteUseCase } from './note-delete.usecase';

const guardJwt = new GuardAppJwt();
const findNote = new FindNoteMysqlRepository();
const deleteNote = new DeleteNoteMysqlRepository();
const deleteNoteUseCase = new DeleteNoteUseCase(guardJwt, findNote, deleteNote);

export { deleteNoteUseCase };
