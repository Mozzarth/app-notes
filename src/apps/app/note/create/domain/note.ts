import { Uuid } from '../../../shared/domain/value-object/Uuid';

type params = { id?: Uuid; note: string; created: Date; dateUpdate?: Date };

export class Note {
  public readonly idNote: Uuid;
  public readonly note: string;
  public readonly created: Date;
  public readonly dateUpdate?: Date;

  constructor(params: params) {
    this.idNote = params.id == undefined ? Uuid.random() : params.id;
    this.note = params.note;
    this.created = params.created;
    this.dateUpdate = params.dateUpdate;
  }
}
