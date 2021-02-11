import { Uuid } from '../../../shared/domain/value-object/Uuid';
import { Note } from '../../create/domain/note';

export interface IFindNoteRepository {
  all(idUser: Uuid, offset: number, limit: number): Promise<Note[] | undefined>;
  byId(idUser: Uuid, idNotebook: Uuid): Promise<Note | undefined>;
}
