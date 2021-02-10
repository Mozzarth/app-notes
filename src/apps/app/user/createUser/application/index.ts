import { NodeMailerProvider } from '../../../notification/mail/infrastructure/nodeMailer';
import { CreateUserNoticationMailer } from './notification/implements/createUserNotifier';
import { FindUserMySqlRepository } from '../../findUser/infrastructure/findUserRepository';
import { CreateUserMySqlRepository } from '../infrastructure/createUserMySqlRepository';
import { CreateUserUseCase } from './createUserUseCase';

const createUser = new CreateUserUseCase(
  new CreateUserMySqlRepository(),
  new FindUserMySqlRepository(),
  new CreateUserNoticationMailer(new NodeMailerProvider())
);

export { createUser };
