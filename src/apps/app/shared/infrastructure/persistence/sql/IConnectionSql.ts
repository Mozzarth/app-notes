export interface SqlConnection {
    getConnection(): Promise<any>
}