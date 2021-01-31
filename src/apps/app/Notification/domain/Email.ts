import { Uuid } from "../../shared/domain/value-object/Uuid";
import { EmailAddres } from "./EmailAdress";

type parameters {
    id?: Uuid
    from: EmailAddres,
    to: EmailAddres,
    title: string,
    body: string
}

export class Email {

    readonly id: Uuid
    readonly from: EmailAddres
    readonly to: EmailAddres
    readonly title: string
    readonly body: string

    constructor(params: parameters) {
        this.id = params.id == undefined ? Uuid.random() : params.id
        this.from = params.from
        this.to = params.to
        this.title = params.title
        this.body = params.body
    }

}