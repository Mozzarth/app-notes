import { EmailUserNotifier } from "../../../Notification/application/welcomeUserNotifier";
import { IFindUserRepository } from "../../findUser/domain/findUserRepository";
import { EmailAddres } from "../../../Notification/domain/EmailAdress";
import { ICreateUserRepository } from "../domain/createUserRepository";
import { User } from "../domain/User";
import { IUserDto } from "./userDto";

export class CreateUserUseCase {
    constructor(
        private createUser: ICreateUserRepository,
        private findUser: IFindUserRepository,
        private noticador: EmailUserNotifier
    ) { }

    async execute(user: IUserDto): Promise<void> {
        const _user = new User(new EmailAddres(user.email), user.password)
        await this.validExistsUser(_user.email.toString())
        await this.createUser.handle(_user)
        await this.noticador.send(_user.email)
    }

    private async validExistsUser(email: string) {
        const userFind = await this.findUser.handle(email)
        if (userFind != undefined) { throw new Error(`This email already exists ${email}`) }
    }
}