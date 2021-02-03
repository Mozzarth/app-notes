import { config } from 'dotenv'

if (process.env.NODE_ENV != "production") {
    const con = config()
}

export const CONFIG = {
    SERVER_PORT: process.env.NODE_PORT
}