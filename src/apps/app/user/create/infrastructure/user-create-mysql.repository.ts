import sql from '../../../shared/infrastructure/persistence/sql/implements/connectionMySql';
import { ICreateUserRepository } from '../domain/user-create.repository';
import { User } from '../domain/user';

export class CreateUserMySqlRepository implements ICreateUserRepository {
  constructor() {}

  async handle(user: User): Promise<User> {
    const connection = await sql.getConnection();
    try {
      const statament = 'insert into users(idUser,email,password) values(UUID_TO_BIN(?),?,?)';
      const parameters = [user.id.value, user.email.toString(), user.password];
      return new Promise((res, rej) => {
        connection.query(statament, parameters, (err, results, fields) => {
          if (err) {
            rej(err);
          }
        });
        res(user);
      });
    } catch (error) {
      throw error;
    } finally {
      connection.end();
    }
  }
}
