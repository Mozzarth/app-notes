import { IFindNoteAllDto, IFindNoteByIdNote, IFindNoteByIdNotebook } from './note-find.dto';
import { IFindNoteRepository } from '../domain/note-find.repository';
import { Uuid } from '../../../shared/domain/value-object/Uuid';
import { IGuardAPP } from '../../../shared/domain/IGuard-application';

export class FindNoteUseCase {
  constructor(private findNote: IFindNoteRepository, private guardAppJwt: IGuardAPP) {}

  async all(params: IFindNoteAllDto) {
    try {
      const idUser = await this.guardAppJwt.getDecodedKey(params.key);
      const paginado = this.getPaginado(params.page, params.limit);
      return await this.findNote.all(idUser, paginado.offset, paginado.limit);
    } catch (error) {
      throw error;
    }
  }
  async byIdNotebook(params: IFindNoteByIdNotebook) {
    try {
      const idUser = await this.guardAppJwt.getDecodedKey(params.key);
      const idNotebook = new Uuid(params.idNotebook);
      return this.findNote.byIdNotebook(idUser, idNotebook);
    } catch (error) {
      throw error;
    }
  }
  async byId(params: IFindNoteByIdNote) {
    try {
      const idUser = await this.guardAppJwt.getDecodedKey(params.key);
      const idNote = new Uuid(params.idNote);
      return this.findNote.byId(idUser, idNote);
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
