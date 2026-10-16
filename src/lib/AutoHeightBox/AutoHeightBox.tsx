import { DEFAULT_GAP } from '@constants';
import { type SxProps, type Theme } from '@mui/material';
import type { ReactNode } from 'react';

import MUIBox from '../../mui';

type AutoHeightProps = {
  sxProps?: SxProps<Theme>;
  children: ReactNode;
};

const AutoHeightBox = ({ sxProps, children }: AutoHeightProps) => {
  return (
    <MUIBox
      sx={{ overflow: 'auto', ...sxProps }}
      ref={(node) => {
        if (node instanceof HTMLElement) {
          const { top } = node.getBoundingClientRect();
          node.style.height = `calc(100vh - ${top + DEFAULT_GAP}px)`;
        }
      }}
    >
      {children}
    </MUIBox>
  );
};

export default AutoHeightBox;
