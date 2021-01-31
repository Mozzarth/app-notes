import { EmailUserNotifier } from "../../../Notification/application/welcomeUserNotifier";
import { NodeMailer } from "../../../Notification/infrastructure/implements/nodeMailer";
import { FindUserRepository } from "../../findUser/infrastructure/findUserRepository";
import { CreateUserSqlRepository } from "../infrastructure/createUserRepository";
import { CreateUserUseCase } from "./createUserUseCase";


const createUser = new CreateUserUseCase(
    new CreateUserSqlRepository(),
    new FindUserRepository(),
    new EmailUserNotifier(new NodeMailer())
)

export { createUser }