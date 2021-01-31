import { User } from "../../createUser/domain/User";
import { IFindUserRepository } from "../domain/findUserRepository";

export class FindUserRepository implements IFindUserRepository {
    handle(userName: string): Promise<User> {
        throw new Error("Method not implemented.");
    }

}