import { Uuid } from '../../../shared/domain/value-object/Uuid';
import { Note } from '../../create/domain/note';

export interface IFindNoteRepository {
  byIdUser(idUser: Uuid, offset: number, limit: number): Promise<Note[]>;
  byId(idUser: Uuid, idNotebook: Uuid): Promise<Note | undefined>;
}
