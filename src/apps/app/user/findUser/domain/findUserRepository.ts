import { User } from "../../createUser/domain/User";

export interface IFindUserRepository {
    handle(userName: string): Promise<User>
}