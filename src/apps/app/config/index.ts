
import { config } from 'dotenv'

if (process.env.NODE_ENV != "production") { config() }

export const CONFIG = {
    MAILER_HOST: process.env.NODE_MAILER_HOST || "",
    MAILER_PORT: process.env.NODE_MAILER_PORT,
    MAILER_USER: process.env.NODE_MAILER_USER,
    MAILER_PASS: process.env.NODE_MAILER_PASS,

    DB_HOST: process.env.NODE_DB_HOST,
    DB_PORT: process.env.NODE_DB_PORT,
    DB_USER: process.env.NODE_DB_USER,
    DB_PASS: process.env.NODE_DB_PASS,
    DB_PASS_ROOT: process.env.NODE_DB_PASS_ROOT,
    DB_DATABASE: process.env.NODE_DB_DATA_BASE
}


