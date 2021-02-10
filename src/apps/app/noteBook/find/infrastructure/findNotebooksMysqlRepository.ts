import sql from '../../../shared/infrastructure/persistence/sql/implements/connectionMySql';
import { IFindNoteBookRepository } from './../domain/findNotebook';
import { Uuid } from '../../../shared/domain/value-object/Uuid';
import { Notebook } from '../../create/domain/notebook';

export class FindNoteBooksMysqlRepository implements IFindNoteBookRepository {
  async byId(idUser: Uuid, idNotebook: Uuid): Promise<Notebook | undefined> {
    const connection = await sql.getConnection();
    try {
      const parameters = [idUser.value, idNotebook.value];
      const statament = `
            select 
	            BIN_TO_UUID(idNotebook) as idNotebook,
                BIN_TO_UUID(idUSer) as idUser,
                title,
                created,
                dateUpdate
            from notebooks
            where idUser = UUID_TO_BIN(?)
            and idNotebook = UUID_TO_BIN(?)
            AND trashed = 0;`;
      return new Promise((res, rej) => {
        connection.query(statament, parameters, (err, results, fields) => {
          if (err) {
            rej(err);
          }
          res(results);
        });
      });
    } catch (error) {
      throw error;
    } finally {
      connection.end();
    }
  }
  async byIdUser(idUser: Uuid, page: number, limit: number): Promise<Notebook[]> {
    const connection = await sql.getConnection();
    try {
      const parameters = [idUser.value, Number(limit), Number(page)];
      const statament = `
            select 
	            BIN_TO_UUID(idNotebook) as idNotebook,
                BIN_TO_UUID(idUSer) as idUser,
                title,
                created,
                dateUpdate
            from notebooks
            where idUser = UUID_TO_BIN(?) 
            AND trashed = 0
            limit ? offset ?;`;
      return new Promise((res, rej) => {
        connection.query(statament, parameters, (err, results, fields) => {
          if (err) {
            rej(err);
          }
          res(results);
        });
      });
    } catch (error) {
      throw error;
    } finally {
      connection.end();
    }
  }
}
