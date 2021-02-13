import sql from '../../../shared/infrastructure/persistence/sql/implements/connectionMySql';
import { IFindNoteRepository } from './../domain/findNoteRespository';
import { Uuid } from '../../../shared/domain/value-object/Uuid';
import { Note } from '../../shared/domain/note';

export class FindNoteMysqlRepository implements IFindNoteRepository {
  async byId(idUser: Uuid, idNote: Uuid): Promise<Note | undefined> {
    const connection = await sql.getConnection();
    try {
      const parameters = [idNote.value, idUser.value];
      const statament = `
        select
        	  BIN_TO_UUID(n.idNote) as idNote,
            BIN_TO_UUID(n.idNotebook) as idNotebook,
            n.note,
            n.created,
            n.dateUpdate
        from notes n join notebooks nb on n.idNotebook = nb.idNotebook
        	  and n.idNote = UUID_TO_BIN(?)
            and n.trashed = 0
            and nb.trashed = 0 join 
        users u on u.idUser = nb.idUser
            and u.idUser = UUID_TO_BIN(?);`;
      return new Promise((res, rej) => {
        connection.query(statament, parameters, (err, results, fields) => {
          if (err) {
            rej(err);
          }
          const note = results.map(
            (value: any) =>
              new Note({
                id: new Uuid(value.idNote),
                idNotebook: new Uuid(value.idNotebook),
                note: value.note,
                created: value.created,
                dateUpdate: value.dateUpdate,
              })
          );
          res(note.length == 0 ? undefined : note[0]);
        });
      });
    } catch (error) {
      throw error;
    } finally {
      connection.end();
    }
  }

  async byIdNotebook(idUser: Uuid, idNotebook: Uuid): Promise<Note[] | undefined> {
    const connection = await sql.getConnection();
    try {
      const parameters = [idNotebook.value, idUser.value];
      const statament = `
        select
        	  BIN_TO_UUID(n.idNote) as idNote,
            BIN_TO_UUID(n.idNotebook) as idNotebook,
            n.note,
            n.created,
            n.dateUpdate
        from notes n join notebooks nb on n.idNotebook = nb.idNotebook
        	  and nb.idNotebook = UUID_TO_BIN(?)
            and n.trashed = 0
            and nb.trashed = 0 join 
        users u on u.idUser = nb.idUser
            and u.idUser = UUID_TO_BIN(?);`;
      return new Promise((res, rej) => {
        connection.query(statament, parameters, (err, results, fields) => {
          if (err) {
            rej(err);
          }
          const notes = results.map(
            (value: any) =>
              new Note({
                id: new Uuid(value.idNote),
                idNotebook: new Uuid(value.idNotebook),
                note: value.note,
                created: value.created,
                dateUpdate: value.dateUpdate,
              })
          );
          res(notes.length == 0 ? undefined : notes);
        });
      });
    } catch (error) {
      throw error;
    } finally {
      connection.end();
    }
  }

  async all(idUser: Uuid, offset: number, limit: number): Promise<Note[]> {
    const connection = await sql.getConnection();
    try {
      const parameters = [idUser.value, limit, offset];
      const statament = `
        select
            BIN_TO_UUID(n.idNote) as idNote,
            BIN_TO_UUID(n.idNotebook) as idNotebook,
            n.note,
            n.created,
            n.dateUpdate
        from notes n join notebooks nb on n.idNotebook = nb.idNotebook
        	  and nb.idUser = UUID_TO_BIN(?)
            and nb.trashed = 0
            and n.trashed = 0
        limit ? offset ?;`;
      return new Promise((res, rej) => {
        connection.query(statament, parameters, (err, results, fields) => {
          if (err) {
            rej(err);
          }
          const notes = results.map(
            (value: any) =>
              new Note({
                id: new Uuid(value.idNote),
                idNotebook: new Uuid(value.idNotebook),
                note: value.note,
                created: value.created,
                dateUpdate: value.dateUpdate,
              })
          );
          res(notes.length == 0 ? undefined : notes);
        });
      });
    } catch (error) {
      throw error;
    } finally {
      connection.end();
    }
  }
}
