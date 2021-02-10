import { Uuid } from './../../../shared/domain/value-object/Uuid';

type params = { id?: Uuid; title: string; userUuid: Uuid };

export class Notebook {
  public readonly idUser: Uuid;
  public readonly idNotebook: Uuid;
  public readonly title: string;

  constructor(notebook: params) {
    this.idNotebook = notebook.id == undefined ? Uuid.random() : notebook.id;
    this.idUser = notebook.userUuid;
    this.title = notebook.title;
  }
}
