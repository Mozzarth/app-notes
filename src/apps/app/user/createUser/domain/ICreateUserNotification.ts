import { Email } from '../../../shared/domain/value-object/Email';
import { EmailAddres } from '../../../shared/domain/value-object/EmailAdress';
import { User } from './User';

export interface ICreateUserNotification {
  send(email: EmailAddres, source: string, user: User): Promise<Email>;
}
