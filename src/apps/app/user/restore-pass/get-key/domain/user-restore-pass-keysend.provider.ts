import { EmailAddres } from '../../../../shared/domain/value-object/EmailAdress';

export interface IUserRestorePassSendProvider {
  handle(emailAddres: EmailAddres, key: string): Promise<any>;
}
