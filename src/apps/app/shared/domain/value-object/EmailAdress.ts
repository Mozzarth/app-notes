import { InvalidArgumentError } from "./invalidArgumentError"


// Value Object
export class EmailAddres {

    private readonly value: string

    constructor(email: string) {
        this.isValidEmail(email)
        this.value = email.trim()
    }
    private isValidEmail(email: string) {
        // TODO validar que el email sea valido 
        if (false) { throw new InvalidArgumentError(`Email is invalid ${email}`) }
    }

    public toEqual(email: string) {
        return this.value == email.trim()
    }
    public toString(): string {
        return this.value
    }

}