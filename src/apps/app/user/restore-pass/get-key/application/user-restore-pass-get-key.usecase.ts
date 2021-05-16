import { IUserRestorePassSendProvider as IUserRestorePassSendProvider } from '../domain/user-restore-pass-keysend.provider';
import { IUserRestorePassDto, IUserRestorePassGetKeyDto } from './user-restore-pass-get-key.dto';
import { IUserRestorePassRepository } from '../domain/user-restore-pass.repository';
import { EmailAddres } from './../../../../shared/domain/value-object/EmailAdress';
import { IFindUserRepository } from '../../../find/domain/user-find.repository';
import { IGuardAPP } from '../../../../shared/domain/IGuard-application';
import { Uuid } from '../../../../shared/domain/value-object/Uuid';

export class UserRestorePasswordUseCase {
  constructor(
    private findUSer: IFindUserRepository,
    private sendKey: IUserRestorePassSendProvider,
    private guard: IGuardAPP,
    private changePass: IUserRestorePassRepository
  ) {}

  async getKey(dto: IUserRestorePassGetKeyDto) {
    try {
      const userFind = await this.getUser(dto.email);
      const key = await this.guard.getKey(userFind);
      await this.sendKey.handle(userFind.email, key);
    } catch (error) {
      throw error;
    }
  }

  async restorePassword(dto: IUserRestorePassDto) {
    try {
      const idUser = await this.guard.getDecodedKey(dto.key);
      const user = await this.getUserById(idUser);
      await this.changePass.handle(user.id, dto.newPass);
    } catch (error) {
      throw error;
    }
  }

  async getUser(email: string) {
    const userFind = await this.findUSer.byEmail(new EmailAddres(email));
    if (userFind == undefined) {
      throw new Error('User not found');
    }
    return userFind;
  }
  async getUserById(id: Uuid) {
    const user = await this.findUSer.byId(id);
    if (user == undefined) {
      throw new Error('User not found');
    }
    return user;
  }
}
