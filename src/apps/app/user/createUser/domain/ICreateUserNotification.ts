import { Email } from '../../../shared/domain/value-object/Email';
import { EmailAddres } from '../../../shared/domain/value-object/EmailAdress';

export interface ICreateUserNotification {
  send(email: EmailAddres): Promise<Email>;
}
