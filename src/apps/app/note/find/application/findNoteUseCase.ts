import { IGuardAPP } from '../../../shared/domain/IGuardApp';
import { IFindNoteRepository } from './../domain/findNoteRespository';
import { IFindNoteDto } from './findNoteDto';

export class FindNoteUseCase {
  constructor(private findNote: IFindNoteRepository, private validkey: IGuardAPP) {}

  async handle(params: IFindNoteDto) {
    try {
      const idUser = await this.validkey.getDecodedKey(params.key);
      const paginado = this.getPaginado(params.page, params.limit);
      const notes = await this.findNote.byIdUser(idUser, paginado.offset, paginado.limit);
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
