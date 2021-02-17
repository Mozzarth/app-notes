import { FindUserMySqlRepository } from '../../find/infrastructure/user-find.repository';
import { NodeMailerProvider } from '../../../notification/mail/infrastructure/node-mailer.provider';
import { CreateUserNoticationMailer } from '../infrastructure/user-create-nodemailer.provider';
import { CreateUserMySqlRepository } from '../infrastructure/user-create-mysql.repository';
import { ICreateUserNotification } from '../domain/IUser-create-notification';
import { IFindUserRepository } from '../../find/domain/user-find.repository';
import { EmailAddres } from '../../../shared/domain/value-object/EmailAdress';
import { ICreateUserRepository } from '../domain/user-create.repository';
import { User } from '../domain/user';
import { IUserCreateDto } from './user-create.dto';

export class CreateUserUseCase {
  constructor(
    private createUser: ICreateUserRepository,
    private findUser: IFindUserRepository,
    private notifier: ICreateUserNotification
  ) {}

  async execute(user: IUserCreateDto, host: string): Promise<User> {
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
