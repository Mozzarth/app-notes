import { validRouterExpressValidator } from '../shared';
import { param } from 'express-validator';

export function findByIdUserMid() {
  return [param('idUser').isUUID(4).exists(), validRouterExpressValidator];
}
