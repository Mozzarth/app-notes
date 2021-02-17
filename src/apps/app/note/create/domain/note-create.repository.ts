import { Note } from '../../shared/domain/note';

export interface ICreateNoteRepository {
  create(note: Note): Promise<Note>;
}
