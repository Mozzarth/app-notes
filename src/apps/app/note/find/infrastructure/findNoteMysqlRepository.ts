import { IFindNoteRepository } from './../domain/findNoteRespository';
import { Uuid } from '../../../shared/domain/value-object/Uuid';
import { Note } from '../../create/domain/note';

class FindNoteMysqlRepository implements IFindNoteRepository {
  byIdUser(idUser: Uuid, offset: number, limit: number): Promise<Note[]> {
    throw new Error('Method not implemented.');
  }
  byId(idUser: Uuid, idNotebook: Uuid): Promise<Note | undefined> {
    throw new Error('Method not implemented.');
  }
}
