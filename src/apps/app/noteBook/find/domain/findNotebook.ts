import { Uuid } from '../../../shared/domain/value-object/Uuid';
import { Notebook } from '../../create/domain/notebook';

export interface IFindNoteBookRepository {
  byIdUser(idUser: Uuid, offset: number, limit: number): Promise<Notebook[]>;
}
