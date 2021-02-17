import sql from '../../../shared/infrastructure/persistence/sql/implements/connectionMySql';
import { IDeleteNotebookRepository } from '../domain/notebook-delete.repository';
import { Uuid } from '../../../shared/domain/value-object/Uuid';

export class DeleteNotebookMySqlRepository implements IDeleteNotebookRepository {
  async delete(idNotebook: Uuid): Promise<void> {
    const connection = await sql.getConnection();
    try {
      const parameters = [idNotebook.value];
      const statament = `
            update notebooks 
	            set trashed = 1,
		        dateTrashed = now()
	        where idNotebook = UUID_TO_BIN(?);`;
      return new Promise((res, rej) => {
        connection.query(statament, parameters, (err, results, fields) => {
          if (err) {
            rej(err);
          }
          res();
        });
      });
    } catch (error) {
      throw error;
    } finally {
      connection.end();
    }
  }
}
