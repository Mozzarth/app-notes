import { Email } from "./Email";

export interface INotifierMail {
        send(email: Email): Promise<void>
}
