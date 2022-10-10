import { ReactNode } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import { NavBar } from './navbar.component';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => (
  <>
    <header>
      <NavBar />
    </header>
    <Container maxWidth={false}>
      <Box component="main">{children}</Box>
    </Container>
    <CssBaseline />
  </>
);
