import { User } from '../../createUser/domain/User';
import { Uuid } from './../../../shared/domain/value-object/Uuid';

export interface IFindUserRepository {
  byEmail(userName: string): Promise<User | undefined>;
  byId(id: Uuid): Promise<User | undefined>;
}
