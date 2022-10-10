import { useState } from 'react';

import Button from '@mui/material/Button';
import MUICard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { Modal } from '@iceandfire/components';
import type { Book } from '@iceandfire/books-logic';
import { CharactersList } from '@iceandfire/characters-components';

type Props = {
  book: Book;
};

export function BookCard({ book }: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <MUICard sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {book.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Author(s): {book.authors.join(', ')}
          </Typography>
          <Typography variant="body2">
            {new Date(book.released).toLocaleDateString()}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleOpen}>
            See characters
          </Button>
        </CardActions>
      </MUICard>
      <Modal
        ariaTitleId="modal-title"
        ariaDescriptionId="modal-description"
        handleClose={handleClose}
        open={open}
      >
        <Typography id="modal-title" component="h4" variant="h6">
          Characters
        </Typography>
        <Typography gutterBottom id="modal-description" color="text.secondary">
          These are all characters from the book: <b>"{book.name}"</b>
        </Typography>
        <CharactersList characters={book.characters} />
      </Modal>
    </>
  );
}
