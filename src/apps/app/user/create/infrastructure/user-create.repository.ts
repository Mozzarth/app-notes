import { User } from '../../user';

export class CreateUserRepository  {
  constructor() {}

  async handle(user: User): Promise<User> {
      // TODO Conexion a la base de datos de mongo
      throw new Error('Not implemented');
  }
}
