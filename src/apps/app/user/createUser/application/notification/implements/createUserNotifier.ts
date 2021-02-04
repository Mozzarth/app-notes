import { INotifierMailProvider } from '../../../../../notification/mail/domain/INotifierMailProvider';
import { EmailAddres } from '../../../../../shared/domain/value-object/EmailAdress';
import { Email } from './../../../../../shared/domain/value-object/Email';
import { ICreateUserNotification } from '../../../domain/ICreateUserNotification';

export class CreateUserNoticationMailer implements ICreateUserNotification {
  constructor(private readonly mailNoti: INotifierMailProvider) {}

  async send(email: EmailAddres): Promise<Email> {
    const to = [email];
    const from = email;
    const asunto = 'Bienvendo a noteDev';
    const body = 'Es un placer darte la bienvenida a mi aplicación....!';
    const html = `<h1 style="color: #5e9ca0; ">
                        Contacto: moisescaicedo15@gmail.com +57 3206758798
                       </h1>`;
    const emailTemp = new Email({ asunto, to, body, from, html });
    await this.mailNoti.send(emailTemp);
    return emailTemp;
  }
}
