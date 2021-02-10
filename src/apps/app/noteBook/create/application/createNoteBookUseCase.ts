import { IFindUserRepository } from './../../../user/findUser/domain/findUserRepository';
import { ICreateNoteBookRepository } from '../domain/createNoteBookRepository';
import { Uuid } from '../../../shared/domain/value-object/Uuid';
import { ICreateNoteBookDto } from './createNoteBookDto';
import { Notebook } from '../domain/notebook';
import { IGuardAPP } from '../../../shared/domain/IGuardApp';

export class CreateNoteBookUseCase {
  constructor(
    private createNotebook: ICreateNoteBookRepository,
    private userFind: IFindUserRepository,
    private validkey: IGuardAPP
  ) {}

  async handle(params: ICreateNoteBookDto): Promise<Notebook> {
    try {
      const userUuid = await this.validkey.getDecodedKey(params.key);
      await this.validateExistence(userUuid);
      const notebook = new Notebook({ title: params.title, userUuid });
      await this.createNotebook.create(notebook);
      return notebook;
    } catch (error) {
      throw error;
    }
  }

  private async validateExistence(id: Uuid) {
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
}
