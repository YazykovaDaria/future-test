export type Sorting = 'relevance' | 'newest';
export type Filtering =
  | 'all'
  | 'art'
  | 'biography'
  | 'computers'
  | 'history'
  | 'medical'
  | 'poetry';

export type BooksQueryData = {
  search: string;
  orderBy: Sorting;
  startIndex: number;
  filtering: Filtering;
};
