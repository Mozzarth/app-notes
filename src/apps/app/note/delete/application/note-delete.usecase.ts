import { IFindNoteRepository } from '../../find/domain/note-find.repository';
import { IDeleteNoteRepository } from '../domain/note-delete.repository';
import { Uuid } from '../../../shared/domain/value-object/Uuid';
import { IGuardAPP } from '../../../shared/domain/IGuard-application';
import { IDeleteNoteDto } from './note-delete.dto';

export class DeleteNoteUseCase {
  constructor(
    private guardAppJwt: IGuardAPP,
    private findNote: IFindNoteRepository,
    private deleteNote: IDeleteNoteRepository
  ) {}

  async handle(params: IDeleteNoteDto) {
    try {
      const userId = await this.guardAppJwt.getDecodedKey(params.key);
      const note = await this.findNote.byId(userId, new Uuid(params.idNote));
      if (note == undefined) {
        throw new Error('Not found note');
      }
      return this.deleteNote.handle(note.idNote);
    } catch (error) {
      throw error;
    }
  }
}
