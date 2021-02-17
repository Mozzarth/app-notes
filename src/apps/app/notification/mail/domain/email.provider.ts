import { Email } from '../../../shared/domain/value-object/Email';

export interface IMailProvider {
  send(params: Email): Promise<void>;
}
