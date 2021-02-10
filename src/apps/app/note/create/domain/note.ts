import { Uuid } from '../../../shared/domain/value-object/Uuid';

type params = { id?: Uuid; note: string };

export class Note {
  public readonly idNote: Uuid;
  public readonly note: string;

  constructor(params: params) {
    this.idNote = params.id == undefined ? Uuid.random() : params.id;
    this.note = params.note;
  }
}
