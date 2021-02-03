import sql from "../../../shared/infrastructure/persistence/sql/implements/connectionMySql";
import { ICreateUserRepository } from "../domain/createUserRepository";
import { User } from "../domain/User";

export class CreateUserMySqlRepository implements ICreateUserRepository {

    constructor() { }

    async handle(user: User): Promise<void> {
        const statament = "insert into users(idUser,email,password) values(UUID_TO_BIN(?),?,?)"
        const parameters = [user.id.value, user.email.toString(), user.password]
        const connection = await sql.getConnection()
        return new Promise((res, rej) => {
            connection.query(statament, parameters, (err, results, fields) => {
                if (results.affectedRows = 1) { console.log("Se ha insertado un usuario") }
                if (err) { rej(err) }
                connection.end()
                res()
            })
        })

    }


}