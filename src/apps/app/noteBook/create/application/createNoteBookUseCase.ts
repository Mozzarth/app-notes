import { IFindUserRepository } from './../../../user/findUser/domain/findUserRepository';
import { ICreateNoteBookRepository } from '../domain/createNoteBookRepository';
import { Uuid } from '../../../shared/domain/value-object/Uuid';
import { ICreateNoteBookDto } from './createNoteBookDto';
import { Notebook } from '../domain/notebook';

export class CreateNoteBookUseCase {
  constructor(private createNotebook: ICreateNoteBookRepository, private userFind: IFindUserRepository) {}

  async handle(params: ICreateNoteBookDto): Promise<Notebook> {
    try {
      const userUuid = new Uuid(params.userId);
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
