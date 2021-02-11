import { IDeleteNotebookRepository } from '../domain/deleteNotebookRepository';
import { Uuid } from './../../../shared/domain/value-object/Uuid';
import { IGuardAPP } from '../../../shared/domain/IGuardApp';
import { IDeleteNotebookDto } from './deleteNotebookDto';
import { IFindNoteBookRepository } from '../../find/domain/findNotebook';

export class DeleteNotebookUseCase {
  constructor(
    private deleteNotebook: IDeleteNotebookRepository,
    private findNotebook: IFindNoteBookRepository,
    private validkey: IGuardAPP
  ) {}

  async handle(params: IDeleteNotebookDto): Promise<void> {
    try {
      const idUser = await this.validkey.getDecodedKey(params.key);
      const idNotebook = new Uuid(params.idNotebook);
      const notebook = this.findNotebook.byIdNotebook(idUser, idNotebook);
      if (notebook == undefined) {
        throw new Error('This Notebook not exists');
      }
      return this.deleteNotebook.delete(idNotebook);
    } catch (error) {
      throw error;
    }
  }
}
