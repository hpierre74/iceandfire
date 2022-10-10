import { configureStore } from '@reduxjs/toolkit';

import { booksReducer, BOOKS_FEATURE_KEY } from '@iceandfire/books-logic';

import {
  CHARACTERS_FEATURE_KEY,
  charactersReducer,
} from '@iceandfire/characters-logic';

export const store = configureStore({
  reducer: {
    [CHARACTERS_FEATURE_KEY]: charactersReducer,
    [BOOKS_FEATURE_KEY]: booksReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env['NODE_ENV'] !== 'production',
  enhancers: [],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
