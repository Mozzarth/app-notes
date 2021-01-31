import { ICreateUserRepository } from "../domain/createUserRepository";
import { User } from "../domain/User";

export class CreateUserSqlRepository implements ICreateUserRepository {
    constructor() {

    }
    async handle(user: User): Promise<void> {
        console.log(user, "creado...!");
        return
    }


}