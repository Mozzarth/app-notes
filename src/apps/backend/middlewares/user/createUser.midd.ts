import { body } from 'express-validator';
import { validRouterExpressValidator } from '../shared';

function createUserMidd() {
  return [
    body('email').isString().exists().isEmail(),
    body('password').isString().exists().isLength({ min: 8 }).withMessage('minimo 8 caracteres'),
    validRouterExpressValidator,
  ];
}

export { createUserMidd };
