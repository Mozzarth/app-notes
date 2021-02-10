import { validRouterExpressValidator } from '../shared';
import { body } from 'express-validator';

export function createNotebookMid() {
  return [body('userId').isUUID(4).exists(), body('title').isString().exists(), validRouterExpressValidator];
}
