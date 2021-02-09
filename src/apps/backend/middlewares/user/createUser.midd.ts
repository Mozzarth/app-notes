import { body } from 'express-validator';
import { validRouterExpressValidator } from '../shared';

function createUserMidd() {
  return [
    body('email').isString().exists().isEmail(),
    body('password').isString().exists(),
    validRouterExpressValidator,
  ];
}

export { createUserMidd };
