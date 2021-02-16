import { IFindUserRepository } from '../../user/findUser/domain/findUserRepository';
import { EmailAddres } from '../../shared/domain/value-object/EmailAdress';
import { IGuardAPP } from '../../shared/domain/IGuardApp';

export class LoginUserUseCase {
  constructor(private findUser: IFindUserRepository, private genereKey: IGuardAPP) {}

  async handle(email: string, password: string) {
    try {
      const _email = new EmailAddres(email);
      let user = await this.findUser.byCredentials(_email, password || '');
      if (user == undefined) {
        throw new Error('User or credential invalid');
      }
      if (!user.active) {
        throw new Error('User dont active');
      }
      return this.genereKey.getKey(user);
    } catch (error) {
      throw error;
    }
  }
}
