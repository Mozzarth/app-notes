import { Router, Request, Response } from 'express'


function routerNotFound(req: Request, res: Response) {
    return res.send("Not found")
}

export { routerNotFound }

