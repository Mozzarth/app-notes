export interface IFindNoteAllDto {
  key: string;
  page?: number;
  limit?: number;
}

export interface IFindNoteByIdNotebook {
  key: string;
  idNotebook: string;
}
export interface IFindNoteByIdNote {
  key: string;
  idNote: string;
}
