import { IFindNoteAllDto, IFindNoteByIdNotebook } from './findNoteDto';
import { IFindNoteRepository } from './../domain/findNoteRespository';
import { Uuid } from '../../../shared/domain/value-object/Uuid';
import { IGuardAPP } from '../../../shared/domain/IGuardApp';

export class FindNoteUseCase {
  constructor(private findNote: IFindNoteRepository, private validkey: IGuardAPP) {}

  async all(params: IFindNoteAllDto) {
    try {
      const idUser = await this.validkey.getDecodedKey(params.key);
      const paginado = this.getPaginado(params.page, params.limit);
      const notes = await this.findNote.all(idUser, paginado.offset, paginado.limit);
      return notes;
    } catch (error) {
      throw error;
    }
  }
  async byIdNotebook(params: IFindNoteByIdNotebook) {
    try {
      const idUser = await this.validkey.getDecodedKey(params.key);
      const idNotebook = new Uuid(params.idNotebook);
      const notes = await this.findNote.byId(idUser, idNotebook);
      return notes;
    } catch (error) {
      throw error;
    }
  }

  //TODO mandar a shared en la capa de aplicacion para ser utilizadas por todos que la requieran
  private getPaginado(page?: number, limit?: number) {
    page = page || 1;
    limit = limit || 10;
    const offset = page == 1 ? 0 : (page - 1) * limit;
    return { offset, limit };
  }
}
