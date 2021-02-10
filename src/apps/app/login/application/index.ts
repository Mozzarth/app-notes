import { FindUserMySqlRepository } from '../../user/findUser/infrastructure/findUserRepository';
import { GuardAppJwt } from '../../shared/infrastructure/guard/guardJwt.midd';
import { LoginUserUseCase } from './loginUserUseCase';

const findUser = new FindUserMySqlRepository();
const generateKey = new GuardAppJwt();
const loginUseCase = new LoginUserUseCase(findUser, generateKey);

export { loginUseCase };
