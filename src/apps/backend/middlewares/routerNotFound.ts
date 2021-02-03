import { Router, Request, Response } from 'express'


function routerNotFound(req: Request, res: Response) {
    return res.status(404).send("Not found")
}

export { routerNotFound }

