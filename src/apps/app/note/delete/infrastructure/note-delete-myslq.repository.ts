import sql from '../../../shared/infrastructure/persistence/sql/implements/connectionMySql';
import { IDeleteNoteRepository } from '../domain/note-delete.repository';
import { Uuid } from '../../../shared/domain/value-object/Uuid';

export class DeleteNoteMysqlRepository implements IDeleteNoteRepository {
  async handle(idNote: Uuid): Promise<void> {
    const connection = await sql.getConnection();
    console.log({ idNote });
    try {
      const parameters = [idNote.value];
      const statament = `
            update notes 
	            set trashed = 1,
		        dateTrashed = now()
	        where idNote = UUID_TO_BIN(?);`;
      return new Promise((res, rej) => {
        connection.query(statament, parameters, (err, results, fields) => {
          console.log(results);
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
