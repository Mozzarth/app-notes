import { body } from 'express-validator';
import { validRouterExpressValidator } from '../shared';

export function createNotebookMid() {
  return [body('userId').isUUID().exists(), body('title').isString().exists(), validRouterExpressValidator];
}
