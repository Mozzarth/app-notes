import { body } from 'express-validator';
import { validRouterExpressValidator } from '../shared/express-validator-valid-route.midd';

export function activeUserMidd() {
  return [body('idUser').exists().isUUID(), validRouterExpressValidator];
}
