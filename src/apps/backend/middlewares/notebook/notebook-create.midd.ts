import { validRouterExpressValidator } from '../shared';
import { body } from 'express-validator';

export function createNotebookMid() {
  return [body('title').isString().isLength({ min: 1 }).exists(), validRouterExpressValidator];
}
