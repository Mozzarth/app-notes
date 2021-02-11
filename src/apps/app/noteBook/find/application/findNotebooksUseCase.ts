import { IFindNoteBookRepository } from '../domain/findNotebook';
import { IGuardAPP } from '../../../shared/domain/IGuardApp';
import { IFindByIdDto } from './findNotebooksDto';

export class FindNotebooksUseCase {
  constructor(private findNotebooksRepo: IFindNoteBookRepository, private validkey: IGuardAPP) {}

  async byIdUSer(params: IFindByIdDto) {
    try {
      const idUser = await this.validkey.getDecodedKey(params.key);
      const paginado = this.getPaginado(params.page, params.limit);
      return this.findNotebooksRepo.all(idUser, paginado.offset, paginado.limit);
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
