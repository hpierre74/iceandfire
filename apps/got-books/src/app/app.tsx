import { useEffect } from 'react';

import { Layout, Loading, PageTitle } from '@iceandfire/components';
import { useAppDispatch, useAppSelector } from '@iceandfire/hooks';
import {
  fetchBooks,
  selectAllBooks,
  selectBooksStatus,
} from '@iceandfire/books-logic';
import { BooksList } from '@iceandfire/books-components';

// For this simple "route-less" app, <App /> is equivalent to a Home page
export function App() {
  const dispatch = useAppDispatch();
  const books = useAppSelector(selectAllBooks);
  const loadingStatus = useAppSelector(selectBooksStatus);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loadingStatus === 'loading' || loadingStatus === 'not loaded') {
    return <Loading />;
  }

  return (
    <Layout>
      <PageTitle>All books</PageTitle>
      <BooksList books={books} />
    </Layout>
  );
}

export default App;
