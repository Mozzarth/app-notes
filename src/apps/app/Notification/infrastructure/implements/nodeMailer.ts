import { INotifierMail } from "../../domain/INotifier";
import { Email } from "../../domain/Email";
import { createTransport, getTestMessageUrl } from "nodemailer";

export class NodeMailer implements INotifierMail {
    async send(email: Email): Promise<void> {
        const transporter = createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'sanford10@ethereal.email',
                pass: 'xxKxh7JdcWj996VuwB'
            }
        })
        const info = await transporter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: email.to.toString(), // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        })
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", getTestMessageUrl(info));
    }
}
