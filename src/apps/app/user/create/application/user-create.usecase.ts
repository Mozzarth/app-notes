import { FindUserMySqlRepository } from '../../find/infrastructure/user-find.repository';
import { CreateUserRepository } from '../infrastructure/user-create.repository';
import { EmailAddres } from '../../../shared/domain/value-object/EmailAdress';
import { IUserCreateDto } from './user-create.dto';
import { User } from '../../user';

export class CreateUserUseCase {
  constructor(
    private createUser: CreateUserRepository,
    private findUser: FindUserMySqlRepository,

  ) {}

  async execute(user: IUserCreateDto): Promise<User> {
    try {
      const _user = new User({
        email: new EmailAddres(user.email),
        password: user.password,
      });
      await this.validateExistence(_user.email.toString());
      await this.createUser.handle(_user);
      return new User({ email: _user.email, password: '', id: _user.id });
    } catch (error) {
      throw error;
    }
  }

  private async validateExistence(email: string) {
      const userFind = await this.findUser.byEmail(new EmailAddres(email));
      if (userFind != undefined) throw new Error(`This email already exists ${email}`);   
  }
}

const createUserRepository = new CreateUserRepository();
const findUserRepository = new FindUserMySqlRepository();
const createUserUseCase = new CreateUserUseCase(createUserRepository, findUserRepository);



export { createUserUseCase };
