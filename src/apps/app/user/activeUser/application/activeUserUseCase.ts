import { IActiveUserRepository } from "../domain/activeUserRepository";
import { Uuid } from "../../../shared/domain/value-object/Uuid";

export class ActiveUserUseCase {
    constructor(private activeUserRepository: IActiveUserRepository) {

    }
    async execute(id: string) {
        try {
            await this.activeUserRepository.handle(new Uuid(id))
            return
        } catch (error) { throw error }
    }
}