import { IFindUserRepository } from '../../../user/findUser/domain/findUserRepository';
import { IFindNoteBookRepository } from '../../../notebook/find/domain/findNotebook';
import { ICreateNoteRepository } from '../domain/createNoteRepository';
import { Uuid } from '../../../shared/domain/value-object/Uuid';
import { IGuardAPP } from '../../../shared/domain/IGuardApp';
import { ICreateNoteDto } from './createNoteDto';
import { Note } from '../domain/note';

export class CreateNoteUseCase {
  constructor(
    private createNote: ICreateNoteRepository,
    private userFind: IFindUserRepository,
    private notebookFind: IFindNoteBookRepository,
    private validkey: IGuardAPP
  ) {}

  async handle(params: ICreateNoteDto) {
    try {
      const userUuid = await this.validkey.getDecodedKey(params.key);
      const idNotebook = new Uuid(params.idNotebook);

      const validations = [this.validateExistenceUser(userUuid), this.validExistenceNotebookUser(userUuid, idNotebook)];
      await Promise.all(validations);
      const note = new Note({ note: params.note });
      return this.createNote.create(note, idNotebook);
    } catch (error) {
      throw error;
    }
  }

  private async validateExistenceUser(id: Uuid) {
    try {
      const userFind = await this.userFind.byId(id);
      if (userFind == undefined) {
        throw new Error(`This user not exists`);
      }
      return;
    } catch (error) {
      throw error;
    }
  }
  private async validExistenceNotebookUser(idUser: Uuid, idNotebook: Uuid) {
    try {
      const notebook = await this.notebookFind.byId(idUser, idNotebook);
      if (notebook == undefined) {
        throw new Error(`This notebook not exists`);
      }
      return;
    } catch (error) {
      throw error;
    }
  }
}
