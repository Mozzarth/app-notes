import { IFindUserRepository } from '../../../user/find/domain/user-find.repository';
import { IFindNoteBookRepository } from '../../../notebook/find/domain/notebook-find.repository';
import { ICreateNoteRepository } from '../domain/note-create.repository';
import { Uuid } from '../../../shared/domain/value-object/Uuid';
import { IGuardAPP } from '../../../shared/domain/IGuard-application';
import { ICreateNoteDto } from './note-create.dto';
import { Note } from '../../shared/domain/note';

export class CreateNoteUseCase {
  constructor(
    private createNote: ICreateNoteRepository,
    private userFind: IFindUserRepository,
    private notebookFind: IFindNoteBookRepository,
    private guardAppJwt: IGuardAPP
  ) {}

  async handle(params: ICreateNoteDto) {
    try {
      const userUuid = await this.guardAppJwt.getDecodedKey(params.key);
      const idNotebook = new Uuid(params.idNotebook);

      const validations = [this.validateExistenceUser(userUuid), this.validExistenceNotebookUser(userUuid, idNotebook)];
      await Promise.all(validations);
      const note = new Note({ note: params.note, created: new Date(), idNotebook });
      return this.createNote.create(note);
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
      const notebook = await this.notebookFind.byIdNotebook(idUser, idNotebook);
      if (notebook == undefined) {
        throw new Error(`This notebook not exists`);
      }
      return;
    } catch (error) {
      throw error;
    }
  }
}
