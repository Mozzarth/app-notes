import { Uuid } from './../../../../shared/domain/value-object/Uuid';

export interface IUserRestorePassRepository {
  handle(idUser: Uuid, newPass: string): Promise<void>;
}
