import { Uuid } from "./Uuid";
import { EmailAddres } from "./EmailAdress";

type parameters = {
    id?: Uuid
    from: EmailAddres,
    to: EmailAddres[],
    asunto: string,
    body: string,
    html?: string
}

export class Email {

    readonly id: Uuid
    readonly from: EmailAddres
    readonly to: EmailAddres[]
    readonly asunto: string
    readonly body: string
    readonly html?: string

    constructor(params: parameters) {
        this.id = params.id == undefined ? Uuid.random() : params.id
        this.from = params.from
        this.to = params.to
        this.asunto = params.asunto
        this.body = params.body
        this.html = params.html
    }

}