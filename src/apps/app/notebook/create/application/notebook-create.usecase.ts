import { IFindUserRepository } from '../../../user/find/domain/user-find.repository';
import { ICreateNoteBookRepository } from '../domain/notebook-create.repository';
import { Uuid } from '../../../shared/domain/value-object/Uuid';
import { IGuardAPP } from '../../../shared/domain/IGuard-application';
import { ICreateNoteBookDto } from './notebook-create.dto';
import { Notebook } from '../../shared/domain/notebook';

export class CreateNoteBookUseCase {
  constructor(
    private createNotebook: ICreateNoteBookRepository,
    private userFind: IFindUserRepository,
    private guardAppJwt: IGuardAPP
  ) {}

  async handle(params: ICreateNoteBookDto): Promise<Notebook> {
    try {
      const userUuid = await this.guardAppJwt.getDecodedKey(params.key);
      await this.validateExistence(userUuid);
      const notebook = new Notebook({ title: params.title, userUuid, created: new Date() });
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
