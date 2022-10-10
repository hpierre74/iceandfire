import { EntityState } from '@reduxjs/toolkit';

import { BOOKS_FEATURE_KEY } from './books.constants';

export type Book = {
  url: string;
  name: string;
  isbn: string;
  authors: string[];
  numberOfPages: number;
  publisher: string;
  country: string;
  mediaType: string;
  released: string;
  characters: string[];
  povCharacters: string[];
};

export interface BooksState extends EntityState<Book> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string | null;
}

export interface AbstractBooksState {
  [key: string]: unknown;
  [BOOKS_FEATURE_KEY]: BooksState;
}
