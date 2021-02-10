import { validRouterExpressValidator } from '.';
import { header } from 'express-validator';

export function keyValidate() {
  return [header('authorization').exists().withMessage('No provider authorization'), validRouterExpressValidator];
}
