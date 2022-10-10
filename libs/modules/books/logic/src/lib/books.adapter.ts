import { createEntityAdapter } from '@reduxjs/toolkit';

import type { Book } from './books.types';

export const booksAdapter = createEntityAdapter<Book>({
  selectId: (book) => book.url,
  sortComparer: (a, b) =>
    new Date(a.released).getTime() > new Date(b.released).getTime() ? 0 : 1,
});
