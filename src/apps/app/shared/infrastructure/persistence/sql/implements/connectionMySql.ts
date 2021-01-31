import { SqlConnection } from "../IConnectionSql";

export class ConnectionMySql implements SqlConnection {
    getConnection() {
        throw new Error("Method not implemented.");
    }

}