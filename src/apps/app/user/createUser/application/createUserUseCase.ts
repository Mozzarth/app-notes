import { FindUserMySqlRepository } from '../../findUser/infrastructure/findUserRepository';
import { NodeMailerProvider } from '../../../notification/mail/infrastructure/nodeMailer';
import { CreateUserNoticationMailer } from '../infrastructure/createUserNotifier';
import { CreateUserMySqlRepository } from '../infrastructure/createUserMySqlRepository';
import { ICreateUserNotification } from '../domain/ICreateUserNotification';
import { IFindUserRepository } from '../../findUser/domain/findUserRepository';
import { EmailAddres } from '../../../shared/domain/value-object/EmailAdress';
import { ICreateUserRepository } from '../domain/createUserRepository';
import { User } from '../domain/User';
import { IUserDto } from './userDto';

export class CreateUserUseCase {
  constructor(
    private createUser: ICreateUserRepository,
    private findUser: IFindUserRepository,
    private notifier: ICreateUserNotification
  ) {}

  async execute(user: IUserDto, host: string): Promise<User> {
    try {
      const _user = new User({
        email: new EmailAddres(user.email),
        password: user.password,
      });
      await this.validateExistence(_user.email.toString());
      await this.createUser.handle(_user);
      await this.notifier.send(_user.email, `${host}`, _user);
      return new User({ email: _user.email, password: '', id: _user.id });
    } catch (error) {
      throw error;
    }
  }

  private async validateExistence(email: string) {
    try {
      const userFind = await this.findUser.byEmail(new EmailAddres(email));
      if (userFind != undefined) {
        throw new Error(`This email already exists ${email}`);
      }
      return;
    } catch (error) {
      throw error;
    }
  }
}

const createUserRepository = new CreateUserMySqlRepository();
const findUserRepository = new FindUserMySqlRepository();
const mail = new CreateUserNoticationMailer(new NodeMailerProvider());

const createUserUseCase = new CreateUserUseCase(createUserRepository, findUserRepository, mail);

export { createUserUseCase };
