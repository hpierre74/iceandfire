import { BOOKS_API_URL } from './books.constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectBooksStatus } from './books.selectors';
import { AbstractBooksState, Book } from './books.types';

export const fetchBooks = createAsyncThunk<
  Book[],
  void,
  { state: AbstractBooksState }
>(
  'books/fetchAll',
  async () => {
    const response = await fetch(`${BOOKS_API_URL}?page=1&pageSize=50`);
    return response.json();
  },
  {
    condition: (_, { getState }) => {
      return selectBooksStatus(getState()) === 'not loaded';
    },
  }
);
