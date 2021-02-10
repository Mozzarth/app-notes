import { EmailAddres } from '../../../shared/domain/value-object/EmailAdress';
import { User } from '../../createUser/domain/User';
import { Uuid } from './../../../shared/domain/value-object/Uuid';

export interface IFindUserRepository {
  byEmail(email: EmailAddres): Promise<User | undefined>;
  byId(id: Uuid): Promise<User | undefined>;
  byCredentials(email: EmailAddres, password: string): Promise<User | undefined>;
}
