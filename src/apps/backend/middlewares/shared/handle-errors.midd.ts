import { NextFunction, Request, Response } from 'express';

function handleError(err: Error, req: Request, res: Response, next: NextFunction) {
  // console.error(err)
  return res.status(500).json(err.message || 'Internal server Error');
}

export { handleError };
