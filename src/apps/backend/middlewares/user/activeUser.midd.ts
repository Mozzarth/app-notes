import { body } from 'express-validator';
import { validRouterExpressValidator } from '../shared/expressValidatorValidRoute';

export function activeUserMidd() {
  return [body('idUser').exists().isUUID(), validRouterExpressValidator];
}
