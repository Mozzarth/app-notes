import { Notebook } from '../../shared/domain/notebook';

export interface ICreateNoteBookRepository {
  create(notebook: Notebook): Promise<void>;
}
