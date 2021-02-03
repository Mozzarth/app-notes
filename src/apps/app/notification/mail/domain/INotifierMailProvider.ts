import { Email } from "../../../shared/domain/value-object/Email";


export interface INotifierMailProvider {
        send(params: Email): Promise<void>
}
