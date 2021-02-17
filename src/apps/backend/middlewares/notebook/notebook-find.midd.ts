import { validRouterExpressValidator } from '../shared';
import { param, query } from 'express-validator';

export function findAllMidd() {
  return [query('limit').optional().isInt(), query('page').optional().isInt(), validRouterExpressValidator];
}
export function findById() {
  return [param('idNotebook').exists().isUUID(), validRouterExpressValidator];
}
