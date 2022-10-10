import { createSelector } from '@reduxjs/toolkit';

import { booksAdapter } from './books.adapter';
import { BOOKS_FEATURE_KEY } from './books.constants';
import type { AbstractBooksState, BooksState } from './books.types';

const { selectAll, selectEntities } = booksAdapter.getSelectors();

export const getBooksState = (rootState: AbstractBooksState): BooksState =>
  rootState[BOOKS_FEATURE_KEY];

export const selectAllBooks = createSelector(getBooksState, selectAll);

export const selectBooksEntities = createSelector(
  getBooksState,
  selectEntities
);

export const selectBooksStatus = (rootState: AbstractBooksState) =>
  getBooksState(rootState).loadingStatus;
