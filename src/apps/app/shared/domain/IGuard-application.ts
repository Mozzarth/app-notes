import { User } from '../../user/create/domain/user';
import { Uuid } from './value-object/Uuid';

export interface IGuardAPP {
  getKey(idUser: User): Promise<string>;
  getDecodedKey(key: string): Promise<Uuid>;
}
