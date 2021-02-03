import { Errback, NextFunction, Request, Response } from 'express'

function handleError(err: Errback, req: Request, res: Response, next: NextFunction) {
    console.error(err)
    return res.status(500).json({ err })
}

export { handleError } 