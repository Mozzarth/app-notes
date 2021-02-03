import { INotifierMailProvider } from "../../domain/INotifierMailProvider";
import { Email } from "./../../../shared/domain/value-object/Email";
import { createTransport, getTestMessageUrl } from "nodemailer";
import { CONFIG } from "../../../config";




export class NodeMailerProvider implements INotifierMailProvider {
    async send(email: Email): Promise<void> {
        const transporter = createTransport({
            host: CONFIG.MAILER_HOST,
            secure: false,
            // port: CONFIG.MAILER_PORT,
            auth: {
                user: CONFIG.MAILER_USER,
                pass: CONFIG.MAILER_PASS
            }
        })

        const info = await transporter.sendMail({
            from: `👻${email.from}`, // sender address
            to: email.to.toString(), // list of receivers
            subject: email.asunto, // Subject line
            text: email.body, // plain text body
            html: email.html, // html body
        })
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", getTestMessageUrl(info));
    }
}
