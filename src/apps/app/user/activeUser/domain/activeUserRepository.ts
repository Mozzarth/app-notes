import { Uuid } from './../../../shared/domain/value-object/Uuid';

export interface IActiveUserRepository {
  handle(id: Uuid): Promise<void>;
}
