import { IFindNoteBookRepository } from './../domain/findNotebook';
import { Uuid } from '../../../shared/domain/value-object/Uuid';
import { IFindByIdDto } from './findNotebooksDto';

export class FindNotebooksUseCase {
  constructor(private findNotebooksRepo: IFindNoteBookRepository) {}

  async byIdUSer(params: IFindByIdDto) {
    try {
      const limit = params.limit || 10;
      const page = params.page || 1;
      const offset = page == 1 ? 0 : (page - 1) * limit;
      const notebooks = await this.findNotebooksRepo.byIdUser(new Uuid(params.idUser), offset, limit);
      return notebooks;
    } catch (error) {
      throw error;
    }
  }
}
