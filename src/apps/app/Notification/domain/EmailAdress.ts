import { InvalidArgumentError } from "../../shared/domain/value-object/invalidArgumentError"


// Value Object
export class EmailAddres {
    private readonly email: string


    constructor(email: string) {
        this.isValidEmail(email)
        this.email = email.trim()
    }
    private isValidEmail(email: string) {
        if (false) { throw new InvalidArgumentError(`Email is invalid ${email}`) }
    }

    public toEqual(email: string) {
        return this.email == email.trim()
    }
    public toString(): string {
        return this.email
    }

}