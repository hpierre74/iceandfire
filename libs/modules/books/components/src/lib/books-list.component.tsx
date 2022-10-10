import Grid from '@mui/material/Grid';

import type { Book } from '@iceandfire/books-logic';

import { BookCard } from './book.component';

type Props = {
  books: Book[];
};

export const BooksList = ({ books }: Props) => {
  return (
    <Grid container spacing={4}>
      {books.map((book) => (
        <Grid item xs={12} sm={6} md={4} xl={3} key={book.isbn}>
          <BookCard book={book} />
        </Grid>
      ))}
    </Grid>
  );
};
