import { Uuid } from '../../../shared/domain/value-object/Uuid';

export interface IDeleteNoteRepository {
  handle(idNote: Uuid): Promise<void>;
}
