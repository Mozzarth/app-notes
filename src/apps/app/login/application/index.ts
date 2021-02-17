import { FindUserMySqlRepository } from '../../user/find/infrastructure/user-find.repository';
import { GuardAppJwt } from '../../shared/infrastructure/guard/guardJwt.midd';
import { LoginUserUseCase } from './user-login.usecase';

const findUser = new FindUserMySqlRepository();
const generateKey = new GuardAppJwt();
const loginUseCase = new LoginUserUseCase(findUser, generateKey);

export { loginUseCase };
