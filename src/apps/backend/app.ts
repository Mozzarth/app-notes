import { handleError, routerNotFound } from './middlewares'
import { appRouter } from './routes'
import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(helmet.noSniff())
app.use(helmet.xssFilter())
app.use(helmet.hidePoweredBy())
app.use(helmet.frameguard({ action: "deny" }))

app.use(morgan("combined"))

app.use("api/", appRouter)
app.use(routerNotFound)
app.use(handleError)

export default app