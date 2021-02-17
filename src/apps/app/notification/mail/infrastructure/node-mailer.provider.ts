import { IMailProvider } from '../domain/email.provider';
import { Email } from '../../../shared/domain/value-object/Email';
import { createTransport, getTestMessageUrl } from 'nodemailer';
import { CONFIG } from '../../../config';

export class NodeMailerProvider implements IMailProvider {
  async send(email: Email): Promise<void> {
    const transporter = createTransport({
      host: CONFIG.MAILER_HOST,
      secure: false,
      // port: CONFIG.MAILER_PORT,
      auth: {
        user: CONFIG.MAILER_USER,
        pass: CONFIG.MAILER_PASS,
      },
    });
    const info = await transporter.sendMail({
      from: CONFIG.MAILER_USER, // sender address
      to: email.to.join(','), // list of receivers
      subject: email.asunto, // Subject line
      text: email.body, // plain text body
      html: email.html, // html body,
    });
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', getTestMessageUrl(info));
  }
}
