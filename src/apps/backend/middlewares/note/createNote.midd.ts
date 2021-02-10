import { body } from 'express-validator';

export function createNoteMidd() {
  return [body('note').isString(), body('idNotebook').isString().exists().isUUID(4).withMessage('invalid UUID')];
}
