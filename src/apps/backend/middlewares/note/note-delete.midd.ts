import { param } from 'express-validator';

export function deleteNoteMidd() {
  return [param('idNote').exists().isUUID()];
}
