import { validRouterExpressValidator } from '../shared';
import { body } from 'express-validator';

export function loginMidd() {
  return [
    body('email').isString().isEmail().exists(),
    body('password').isString().exists(),
    validRouterExpressValidator,
  ];
}
