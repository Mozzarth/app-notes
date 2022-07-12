import sql from '../../../shared/infrastructure/persistence/sql/implements/connectionMySql';
import { EmailAddres } from '../../../shared/domain/value-object/EmailAdress';
import { IFindUserRepository } from '../domain/user-find.repository';
import { Uuid } from '../../../shared/domain/value-object/Uuid';
import { User } from '../../user';

type queryResponse = { idUSer: string; email: string; password: string; active: Buffer } | undefined;

export class FindUserMySqlRepository implements IFindUserRepository {
  async byId(id: Uuid): Promise<User | undefined> {
    const connection = await sql.getConnection();
    try {
      return new Promise((res, rej) => {
        connection.query(
          `SELECT
            BIN_TO_UUID(idUSer) as idUSer,
            email,
            password,
            active,
            dateActive
           FROM users 
           where idUser = UUID_TO_BIN(?);`,
          [id.value],
          (error, result: queryResponse[], field) => {
            if (error) {
              return rej(error);
            }
            if (result[0] == undefined) {
              return res(result[0]);
            }
            const user = new User({
              id: new Uuid(result[0].idUSer),
              email: new EmailAddres(result[0].email),
              password: result[0].password,
              active: result[0].active.lastIndexOf(1) !== -1,
            });
            res(user);
          }
        );
      });
    } catch (error) {
      throw error;
    } finally {
      connection.end();
    }
  }

  async byEmail(email: EmailAddres): Promise<User | undefined> {
    // TODO active = 0 por ahora no va
    const connection = await sql.getConnection();
    try {
      return new Promise((res, rej) => {
        connection.query(
          `SELECT
            BIN_TO_UUID(idUSer) as idUSer,
            email,
            password,
            active,
            dateActive
            FROM users where email = ?;`,
          [email.toString()],
          (error, result: queryResponse[], field) => {
            if (error) {
              return rej(error);
            }
            if (result[0] == undefined) {
              return res(result[0]);
            }
            const user = new User({
              id: new Uuid(result[0].idUSer),
              email: new EmailAddres(result[0].email),
              password: result[0].password,
              active: result[0].active.lastIndexOf(1) !== -1,
            });
            res(user);
          }
        );
      });
    } catch (error) {
      throw error;
    } finally {
      connection.end();
    }
  }

  async byCredentials(email: EmailAddres, password: string): Promise<User | undefined> {
    const connection = await sql.getConnection();
    try {
      return new Promise((res, rej) => {
        connection.query(
          `SELECT
            BIN_TO_UUID(idUSer) as idUSer,
            email,
            password,
            active,
            dateActive
            FROM users where email = ?
            AND password = ?;`,
          [email.toString(), password],
          (error, result: queryResponse[], field) => {
            if (error) {
              return rej(error);
            }
            if (result[0] == undefined) {
              return res(result[0]);
            }
            const user = new User({
              id: new Uuid(result[0].idUSer),
              email: new EmailAddres(result[0].email),
              password: result[0].password,
              active: result[0].active.lastIndexOf(1) !== -1,
            });
            res(user);
          }
        );
      });
    } catch (error) {
      throw error;
    } finally {
      connection.end();
    }
  }
}
