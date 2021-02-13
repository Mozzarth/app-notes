import { Uuid } from '../../../shared/domain/value-object/Uuid';
import { Note } from '../../shared/domain/note';

export interface IFindNoteRepository {
  all(idUser: Uuid, offset: number, limit: number): Promise<Note[] | undefined>;
  byIdNotebook(idUser: Uuid, idNotebook: Uuid): Promise<Note[] | undefined>;
  byId(idUser: Uuid, idNote: Uuid): Promise<Note | undefined>;
}
