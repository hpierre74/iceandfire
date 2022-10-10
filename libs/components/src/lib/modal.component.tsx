import * as React from 'react';
import Box from '@mui/material/Box';
import MUIModal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: 4,
};

type Props = {
  ariaTitleId: string;
  ariaDescriptionId: string;
  children: React.ReactNode;
  handleClose: () => void;
  open: boolean;
};

export const Modal = ({
  ariaDescriptionId,
  ariaTitleId,
  children,
  handleClose,
  open,
}: Props) => {
  return (
    <MUIModal
      open={open}
      onClose={handleClose}
      aria-labelledby={ariaTitleId}
      aria-describedby={ariaDescriptionId}
    >
      <Box component={Paper} sx={style}>
        {children}
      </Box>
    </MUIModal>
  );
};
