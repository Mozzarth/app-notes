import { Notebook } from './notebook';

export interface ICreateNoteBookRepository {
  create(notebook: Notebook): Promise<void>;
}
