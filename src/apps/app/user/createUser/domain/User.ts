import { EmailAddres } from "../../../Notification/domain/EmailAdress";


export class User {
    constructor(public readonly email: EmailAddres,
        public readonly password: string) {

    }
}