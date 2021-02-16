import { INotifierMailProvider } from '../../../notification/mail/domain/INotifierMailProvider';
import { EmailAddres } from '../../../shared/domain/value-object/EmailAdress';
import { ICreateUserNotification } from '../domain/ICreateUserNotification';
import { Email } from '../../../shared/domain/value-object/Email';
import { User } from '../domain/User';

export class CreateUserNoticationMailer implements ICreateUserNotification {
  constructor(private readonly serviceEmail: INotifierMailProvider) {}

  async send(email: EmailAddres, source: string, user: User): Promise<Email> {
    const to = [email];
    const from = email;
    const asunto = 'Bienvendo a simpleNote';
    const body = 'Es un placer darte la bienvenida a mi aplicación....!';
    const html = `
    <!DOCTYPE html>
      <html>
        <body>
          <form action="${source}" method ="post" target="_blank">
              <h1 style="color: #5e9ca0; ">
                Contacto: moisescaicedo15@gmail.com +57 3206758798
              </h1>
            <input name="idUser" value ="${user.id.value}" text="activate account" type="submit">
          </form>
        </body>
      </html>`;
    const emailTemp = new Email({ asunto, to, body, from, html });
    await this.serviceEmail.send(emailTemp);
    return emailTemp;
  }
}
