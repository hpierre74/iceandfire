import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchBooks } from './books.actions';
import { booksAdapter } from './books.adapter';
import { BOOKS_FEATURE_KEY } from './books.constants';
import type { Book, BooksState } from './books.types';

export const initialBooksState: BooksState = booksAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: null,
});

export const booksSlice = createSlice({
  name: BOOKS_FEATURE_KEY,
  initialState: initialBooksState,
  reducers: {
    addBook: booksAdapter.addOne,
    removeBook: booksAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state: BooksState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchBooks.fulfilled,
        (state: BooksState, action: PayloadAction<Book[]>) => {
          booksAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchBooks.rejected, (state: BooksState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message || '';
      });
  },
});

export const booksReducer = booksSlice.reducer;

export const { addBook, removeBook } = booksSlice.actions;
