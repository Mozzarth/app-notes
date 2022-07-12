
import { config } from 'dotenv'

if (process.env.NODE_ENV != "production") { config() }

export const CONFIG = {

    DB_HOST: process.env.NODE_DB_HOST,
    DB_PORT: process.env.NODE_DB_PORT,
    DB_USER: process.env.NODE_DB_USER,
    DB_PASS: process.env.NODE_DB_PASS,
    DB_DATABASE: process.env.NODE_DB_DATA_BASE
}


