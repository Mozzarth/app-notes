import { User } from './user';

export interface ICreateUserRepository {
  handle(user: User): Promise<User>;
}
