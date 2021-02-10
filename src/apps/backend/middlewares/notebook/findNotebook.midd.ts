import { validRouterExpressValidator } from '../shared';
import { query } from 'express-validator';

export function findByIdUserMid() {
  return [query('limit').optional().isInt(), query('page').optional().isInt(), validRouterExpressValidator];
}
