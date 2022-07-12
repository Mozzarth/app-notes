import { validRouterExpressValidator } from '../shared';
import { body } from 'express-validator';

function createUserMidd() {
  return [
    body('email').isString().exists().isEmail(),
    body('password').isString().exists().isLength({ min: 8 }).withMessage('minimo 8 caracteres'),
    validRouterExpressValidator,
  ];
}

export { createUserMidd };
