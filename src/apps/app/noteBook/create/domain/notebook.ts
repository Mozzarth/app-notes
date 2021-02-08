import { Uuid } from './../../../shared/domain/value-object/Uuid';

type params = { id?: Uuid; title: string; userUuid: Uuid };

export class Notebook {
  public readonly userUuid: Uuid;
  public readonly id: Uuid;
  public readonly title: string;

  constructor(notebook: params) {
    this.id = notebook.id == undefined ? Uuid.random() : notebook.id;
    this.userUuid = notebook.userUuid;
    this.title = notebook.title;
  }
}
