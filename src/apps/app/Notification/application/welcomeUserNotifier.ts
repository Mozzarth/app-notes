import { EmailAddres } from "../domain/EmailAdress";
import { INotifierMail } from "../domain/INotifier";
import { Email } from "../domain/Email";


export class EmailUserNotifier {

    constructor(private sender: INotifierMail) { }

    async send(email: EmailAddres) {
        this.sender.send(new Email({
            title: "welcome", body: "Bienvenido a noteDev",
            to: email, from: new EmailAddres("mozzarthDev@gmailcom")
        }))
    }

}