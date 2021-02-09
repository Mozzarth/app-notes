import { Result, ValidationError, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export function validRouterExpressValidator(req: Request, res: Response, next: NextFunction) {
  try {
    const error = validationResult(req);
    if (error.isEmpty()) {
      return next();
    }
    return res.status(400).json({
      errors: error['errors'],
    });
  } catch (error) {
    next(error);
  }
}
