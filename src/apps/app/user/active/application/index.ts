import { ActiveUserMySqlRepository } from '../infrastructure/user-active-mysql.repository';
import { ActiveUserUseCase } from './user-active.usecase';

const activeUserRepository = new ActiveUserMySqlRepository();
const activeUser = new ActiveUserUseCase(activeUserRepository);

export { activeUser };
