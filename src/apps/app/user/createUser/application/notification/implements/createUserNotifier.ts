import { INotifierMailProvider } from "../../../../../notification/domain/INotifierMailProvider";
import { Email } from "./../../../../../shared/domain/value-object/Email";
import { EmailAddres } from "../../../../../shared/domain/value-object/EmailAdress";
import { Uuid } from "../../../../../shared/domain/value-object/Uuid";
import { ICreateUserNotification } from "../ICreateUserNotification";

export class CreateUserNoticationMailer implements ICreateUserNotification {
    constructor(private readonly mailNoti: INotifierMailProvider) { }


    async send(email: EmailAddres): Promise<Email> {
        const to = email
        const from = email
        const asunto = "Bienvendo a noteDev"
        const body = "Es un pla$er darte la bienvenida....!"
        const emailTemp = new Email({ asunto, to, body, from })
        await this.mailNoti.send(emailTemp)
        return emailTemp
    }


}