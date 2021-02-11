import { header, param, query } from 'express-validator';
import { validRouterExpressValidator } from './../shared/expressValidatorValidRoute';

export function findNoteAllMidd() {
  return [
    header('authorization').exists().isUUID(),
    query('limit').optional().isInt(),
    query('page').optional().isInt(),
    validRouterExpressValidator,
  ];
}

export function findNoteByIdNotebook() {
  return [
    header('authorization').exists().isUUID(),
    param('idNotebook').exists().isUUID(),
    validRouterExpressValidator,
  ];
}
