export interface IFindNotebookAllDto {
  key: string;
  page?: number;
  limit?: number;
}

export interface IFindNoteBookById {
  key: string;
  idNotebook: string;
}
