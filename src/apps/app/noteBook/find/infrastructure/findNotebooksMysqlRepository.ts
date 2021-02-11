import sql from '../../../shared/infrastructure/persistence/sql/implements/connectionMySql';
import { IFindNoteBookRepository } from '../domain/findNotebook';
import { Uuid } from '../../../shared/domain/value-object/Uuid';
import { Notebook } from '../../create/domain/notebook';

export class FindNoteBooksMysqlRepository implements IFindNoteBookRepository {
  async byIdNotebook(idUser: Uuid, idNotebook: Uuid): Promise<Notebook | undefined> {
    const connection = await sql.getConnection();
    try {
      const parameters = [idNotebook.value, idUser.value];
      const statament = `
            select 
	            BIN_TO_UUID(nb.idNotebook) as idNotebook,
	            BIN_TO_UUID(nb.idUSer) as idUser,
	            nb.title,
	            nb.created,
              nb.dateUpdate
            from notebooks nb join 
            users u on u.idUser = nb.idUser
	            and nb.idNotebook = UUID_TO_BIN(?)
	            and nb.idUser = UUID_TO_BIN(?)
	            and nb.trashed = 0;`;
      return new Promise((res, rej) => {
        connection.query(statament, parameters, (err, results, fields) => {
          if (err) {
            rej(err);
          }
          const netebook = results.map(
            (value: any) =>
              new Notebook({
                id: value.idNotebook,
                title: value.title,
                userUuid: value.idUser,
                created: value.created,
                dateUpdate: value.dateUpdate,
              })
          );
          res(netebook.length == 0 ? undefined : netebook[0]);
        });
      });
    } catch (error) {
      throw error;
    } finally {
      connection.end();
    }
  }
  async all(idUser: Uuid, page: number, limit: number): Promise<Notebook[]> {
    const connection = await sql.getConnection();
    try {
      const parameters = [idUser.value, Number(limit), Number(page)];
      const statament = `
           select 
	          BIN_TO_UUID(nb.idNotebook) as idNotebook,
	          BIN_TO_UUID(nb.idUSer) as idUser,
	          nb.title,
	          nb.created,
	          nb.dateUpdate
          from notebooks nb join
          	 users u on u.idUser = nb.idUser
               and nb.idUser = UUID_TO_BIN(?) 
          	   and nb.trashed = 0
          limit ? offset ?;`;
      return new Promise((res, rej) => {
        connection.query(statament, parameters, (err, results, fields) => {
          if (err) {
            rej(err);
          }
          const netebooks = results.map(
            (value: any) =>
              new Notebook({
                id: value.idNotebook,
                title: value.title,
                userUuid: value.idUser,
                created: value.created,
                dateUpdate: value.dateUpdate,
              })
          );
          res(netebooks.length == 0 ? undefined : netebooks);
        });
      });
    } catch (error) {
      throw error;
    } finally {
      connection.end();
    }
  }
}
