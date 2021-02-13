import { Uuid } from '../../../shared/domain/value-object/Uuid';

type params = { id?: Uuid; title: string; userUuid: Uuid; created: Date; dateUpdate?: Date };

export class Notebook {
  public readonly idUser: Uuid;
  public readonly idNotebook: Uuid;
  public readonly title: string;
  public readonly created: Date;
  public readonly dateUpdate?: Date;

  constructor(notebook: params) {
    this.idNotebook = notebook.id == undefined ? Uuid.random() : notebook.id;
    this.idUser = notebook.userUuid;
    this.title = notebook.title;
    this.created = notebook.created;
    this.dateUpdate = notebook.dateUpdate;
  }
}
