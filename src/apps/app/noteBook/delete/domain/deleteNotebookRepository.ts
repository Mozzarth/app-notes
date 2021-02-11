import { Uuid } from '../../../shared/domain/value-object/Uuid';

export interface IDeleteNotebookRepository {
  delete(idNotebook: Uuid): Promise<void>;
}
