import type { ComponentType } from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import Box from '@mui/material/Box';

type Props = {
  height: number | string;
  itemCount: number;
  itemData: unknown;
  itemSize: number;
  maxWidth: number | string;
  width?: number | string;
  renderRow: ComponentType<ListChildComponentProps>;
};

export const VirtualizedList = ({
  height,
  itemCount,
  itemData,
  itemSize,
  maxWidth,
  renderRow,
  width = '100%',
}: Props) => {
  return (
    <Box
      sx={{
        width,
        height,
        maxWidth,
        bgcolor: 'background.paper',
      }}
    >
      <FixedSizeList
        height={height}
        width={maxWidth}
        itemSize={itemSize}
        itemData={itemData}
        itemCount={itemCount}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
};
