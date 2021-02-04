import sql from '../../../shared/infrastructure/persistence/sql/implements/connectionMySql';
import { IActiveUserRepository } from '../domain/activeUserRepository';
import { Uuid } from '../../../shared/domain/value-object/Uuid';

export class ActiveUserMySqlRepository implements IActiveUserRepository {
  async handle(id: Uuid): Promise<void> {
    const statament = `update users 
                          set active = 1,
                          dateActive = now()
                       where idUser = UUID_TO_BIN(?)`;
    const parameters = [id.toString()];
    const connection = await sql.getConnection();
    return new Promise((res, rej) => {
      connection.query(statament, parameters, (err, results, field) => {
        if (err) {
          rej(err);
        }
        connection.end();
        res();
      });
    });
  }
}
