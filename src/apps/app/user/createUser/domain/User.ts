import { EmailAddres } from '../../../shared/domain/value-object/EmailAdress';
import { Uuid } from '../../../shared/domain/value-object/Uuid';

type parameters = { id?: Uuid; email: EmailAddres; password: string; active?: boolean };

export class User {
  public readonly id: Uuid;
  public readonly email: EmailAddres;
  public readonly password: string;
  public readonly active: boolean;

  constructor(params: parameters) {
    this.id = params.id == undefined ? Uuid.random() : params.id;
    this.email = params.email;
    this.active = params.active || false;
    this.password = params.password;
  }
}
