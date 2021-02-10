import sql from '../../../shared/infrastructure/persistence/sql/implements/connectionMySql';
import { ICreateNoteRepository } from '../domain/createNoteRepository';
import { Uuid } from '../../../shared/domain/value-object/Uuid';
import { Note } from '../domain/note';

export class CreateNoteMysqlRepository implements ICreateNoteRepository {
  async create(note: Note, idNotebook: Uuid): Promise<Note> {
    try {
      const connection = await sql.getConnection();
      try {
        const statament = `
                  insert into notes (idNote,idNotebook,note) 
                  values(UUID_TO_BIN(?),
	              UUID_TO_BIN(?),?)`;
        const parameters = [note.idNote.value, idNotebook.value, note.note];
        return new Promise((res, rej) => {
          connection.query(statament, parameters, (err, results, fields) => {
            if (err) {
              rej(err);
            }
            if (results.affectedRows == 1) {
              console.log('Se ha insertado una nueva nota');
            }
            res(note);
          });
        });
      } catch (error) {
        throw error;
      } finally {
        connection.end();
      }
    } catch (error) {
      throw error;
    }
  }
}
