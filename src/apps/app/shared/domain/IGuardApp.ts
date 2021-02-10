import { User } from '../../user/createUser/domain/User';
import { Uuid } from './value-object/Uuid';

export interface IGuardAPP {
  getKey(idUser: User): Promise<string>;
  getDecodedKey(key: string): Promise<Uuid>;
}
