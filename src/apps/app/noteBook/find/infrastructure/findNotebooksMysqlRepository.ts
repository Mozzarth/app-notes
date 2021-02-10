import sql from '../../../shared/infrastructure/persistence/sql/implements/connectionMySql';
import { IFindNoteBookRepository } from './../domain/findNotebook';
import { Uuid } from '../../../shared/domain/value-object/Uuid';
import { Notebook } from '../../create/domain/notebook';

export class FindNoteBooksMysqlRepository implements IFindNoteBookRepository {
  async byIdUser(idUser: Uuid, page: number, limit: number): Promise<Notebook[]> {
    const connection = await sql.getConnection();
    try {
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
      const parameters = [idUser.value, Number(limit), Number(page)];
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
