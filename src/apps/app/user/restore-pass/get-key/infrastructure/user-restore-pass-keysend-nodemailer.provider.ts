import { IUserRestorePassSendProvider } from '../domain/user-restore-pass-keysend.provider';
import { IMailProvider } from '../../../../notification/mail/domain/email.provider';
import { EmailAddres } from '../../../../shared/domain/value-object/EmailAdress';
import { Email } from '../../../../shared/domain/value-object/Email';

export class UserRestorePassKeySendNodeMailer implements IUserRestorePassSendProvider {
  constructor(private readonly serviceEmail: IMailProvider) {}

  async handle(email: EmailAddres, key: string, source: string): Promise<any> {
    try {
      const to = [email];
      const from = email;
      const asunto = 'Restore password';
      const body = 'Para restaurar la contraseña ve al enlace';
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
    } catch (error) {
      throw error;
    }
  }
}
