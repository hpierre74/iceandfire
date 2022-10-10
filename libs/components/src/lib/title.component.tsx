import Typography from '@mui/material/Typography';

type Props = {
  children: string;
};

export const PageTitle = ({ children }: Props) => (
  <Typography
    sx={{ p: 2 }}
    align="center"
    gutterBottom
    component="h1"
    variant="h4"
  >
    {children}
  </Typography>
);
