import { IFindUserRepository } from './../../../user/findUser/domain/findUserRepository';
import { ICreateNoteBookRepository } from '../domain/createNoteBookRepository';
import { Uuid } from '../../../shared/domain/value-object/Uuid';
import { ICreateNoteBookDto } from './createNoteBookDto';
import { Notebook } from '../domain/notebook';

export class CreateNoteBookUseCase {
  constructor(private createNotebook: ICreateNoteBookRepository, private userFind: IFindUserRepository) {}

  async handle(params: ICreateNoteBookDto) {
    try {
      const userUuid = new Uuid(params.idUser);
      await this.validateExistence(userUuid);
      const notebook = new Notebook({ title: params.titleNotebook, userUuid });
      await this.createNotebook.create(notebook);
    } catch (error) {
      throw error;
    }
  }

  private async validateExistence(id: Uuid) {
    try {
      const userFind = await this.userFind.byId(id);
      console.log({ userFind });
      if (userFind == undefined) {
        throw new Error(`This user not exists`);
      }
      return;
    } catch (error) {
      throw error;
    }
  }
}
