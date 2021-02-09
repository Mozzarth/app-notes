import sql from '../../../shared/infrastructure/persistence/sql/implements/connectionMySql';
import { ICreateNoteBookRepository } from './../domain/createNoteBookRepository';
import { Notebook } from '../domain/notebook';

export class CreateNotebookMysqlRepository implements ICreateNoteBookRepository {
  async create(notebook: Notebook): Promise<void> {
    const connection = await sql.getConnection();
    try {
      const statament = `
                           insert into 
                           notebooks(idNotebook,idUser,title) 
                           values(UUID_TO_BIN(?),UUID_TO_BIN(?),?)`;
      const parameters = [notebook.id.value, notebook.userId.value, notebook.title];
      return new Promise((res, rej) => {
        connection.query(statament, parameters, (err, results, fields) => {
          if (err) {
            rej(err);
          }
          if (results.affectedRows == 1) {
            console.log('Se ha insertado una nueva libreta');
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
