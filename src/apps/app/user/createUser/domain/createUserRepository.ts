import { User } from "./User";

export interface ICreateUserRepository {
    handle(user: User): Promise<void>
}