import { config } from 'dotenv'

if (process.env.NODE_ENV != "production") {
    const con = config()
    if (con.error)} {
    console.error("Ocurrio un error a la hora de configurar entorno")
    process.exit(1)
}
}

export const CONFIG = {
    SERVER_PORT: process.env.NODE_PORT
}