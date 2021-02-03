import { EmailUserNotifier } from "../../../notification/application/welcomeUserNotifier";
import { NodeMailerProvider } from "../../../notification/infrastructure/implements/nodeMailer";
import { FindUserRepository } from "../../findUser/infrastructure/findUserRepository";
import { CreateUserMySqlRepository } from "../infrastructure/createUserRepository";
import { CreateUserUseCase } from "./createUserUseCase";


const createUser = new CreateUserUseCase(
    new CreateUserMySqlRepository(),
    new FindUserRepository(),
    new EmailUserNotifier(new NodeMailerProvider())
)

export { createUser }