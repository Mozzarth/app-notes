import { Uuid } from '../../../shared/domain/value-object/Uuid';
import { Note } from './note';

export interface ICreateNoteRepository {
  create(note: Note, idNotebook: Uuid): Promise<Note>;
}
