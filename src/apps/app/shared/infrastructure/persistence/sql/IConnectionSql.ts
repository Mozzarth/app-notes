import mysql from 'mysql'

export interface SqlConnection {
    getConnection(): Promise<mysql.Connection>
    close(): void
}