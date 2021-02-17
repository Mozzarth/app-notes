import { Uuid } from '../../../shared/domain/value-object/Uuid';
import { Notebook } from '../../shared/domain/notebook';

export interface IFindNoteBookRepository {
  all(idUser: Uuid, offset: number, limit: number): Promise<Notebook[]>;
  byIdNotebook(idUser: Uuid, idNotebook: Uuid): Promise<Notebook | undefined>;
}
