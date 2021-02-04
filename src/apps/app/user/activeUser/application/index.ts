import { ActiveUserMySqlRepository } from '../infrastructure/activeUserMySqlRepository'
import { ActiveUserUseCase } from './activeUserUseCase'



const activeUserRepository = new  ActiveUserMySqlRepository()
const activeUser = new ActiveUserUseCase(activeUserRepository);

export {activeUser}