import { NodeMailerProvider } from '../../../notification/mail/infrastructure/node-mailer.provider';
import { CreateUserNoticationMailer } from '../infrastructure/user-create-nodemailer.provider';
import { FindUserMySqlRepository } from '../../find/infrastructure/user-find.repository';
import { CreateUserMySqlRepository } from '../infrastructure/user-create-mysql.repository';
import { CreateUserUseCase } from './user-create.usecase';

const createUser = new CreateUserUseCase(
  new CreateUserMySqlRepository(),
  new FindUserMySqlRepository(),
  new CreateUserNoticationMailer(new NodeMailerProvider())
);

export { createUser };
