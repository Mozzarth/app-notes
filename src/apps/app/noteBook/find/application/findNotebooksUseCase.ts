import { IFindNoteBookRepository } from '../domain/findNotebook';
import { IGuardAPP } from '../../../shared/domain/IGuardApp';
import { IFindNotebookAllDto, IFindNoteBookById } from './findNotebooksDto';
import { Uuid } from '../../../shared/domain/value-object/Uuid';

export class FindNotebooksUseCase {
  constructor(private findNotebooksRepo: IFindNoteBookRepository, private guardAppJwt: IGuardAPP) {}

  async all(params: IFindNotebookAllDto) {
    try {
      const idUser = await this.guardAppJwt.getDecodedKey(params.key);
      const paginado = this.getPaginado(params.page, params.limit);
      return this.findNotebooksRepo.all(idUser, paginado.offset, paginado.limit);
    } catch (error) {
      throw error;
    }
  }
  async byId(params: IFindNoteBookById) {
    try {
      const idUser = await this.guardAppJwt.getDecodedKey(params.key);
      const idNotebook = new Uuid(params.idNotebook);
      return this.findNotebooksRepo.byIdNotebook(idUser, idNotebook);
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
