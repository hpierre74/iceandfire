import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { Layout } from './layout.component';

export const Loading = () => {
  return (
    <Layout>
      <Box sx={{ textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    </Layout>
  );
};
