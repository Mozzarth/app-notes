import { NodeMailerProvider } from "../../../notification/mail/infrastructure/implements/nodeMailer";
import { CreateUserNoticationMailer } from "./notification/implements/createUserNotifier";
import { FindUserRepository } from "../../findUser/infrastructure/findUserRepository";
import { CreateUserMySqlRepository } from "../infrastructure/createUserRepository";
import { CreateUserUseCase } from "./createUserUseCase";


const createUser = new CreateUserUseCase(
    new CreateUserMySqlRepository(),
    new FindUserRepository(),
    new CreateUserNoticationMailer(new NodeMailerProvider())
)

export { createUser }