import { FindNoteBooksMysqlRepository } from '../infrastructure/findNotebooksMysqlRepository';
import { FindNotebooksUseCase } from './findNotebooksUseCase';

const findNotebooksRepository = new FindNoteBooksMysqlRepository();
const findNotebooksUseCase = new FindNotebooksUseCase(findNotebooksRepository);

export { findNotebooksUseCase };
