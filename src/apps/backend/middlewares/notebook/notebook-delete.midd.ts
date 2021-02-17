import { validRouterExpressValidator } from '../shared';
import { param } from 'express-validator';

export function deleteNotebook() {
  return [param('idNotebook').exists().isUUID(), validRouterExpressValidator];
}
