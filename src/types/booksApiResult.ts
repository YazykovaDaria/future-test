import GoogleBook from './book';

export default interface GoogleBooksAPIResults {
  kind: string;
  totalItems: number;
  items: GoogleBook[];
}
