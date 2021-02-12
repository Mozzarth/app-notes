import { param, query } from 'express-validator';
import { validRouterExpressValidator } from './../shared/expressValidatorValidRoute';

export function findNoteAllMidd() {
  return [query('limit').optional().isInt(), query('page').optional().isInt(), validRouterExpressValidator];
}

export function findNoteByIdNotebook() {
  return [param('idNotebook').exists().isUUID(), validRouterExpressValidator];
}
