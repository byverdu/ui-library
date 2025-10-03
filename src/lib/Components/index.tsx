import { Box, type SxProps, type Theme, Tabs, Tab } from '@mui/material';
import { DEFAULT_GAP } from '@constants';
import { ReactElement, ReactNode } from 'react';

type AutoHeightProps = {
  sxProps?: SxProps<Theme>;
  children: ReactNode;
};

type ScrollableBoxProps = {
  tabs: ReactElement[];
};

export const AutoHeightBox = ({ sxProps, children }: AutoHeightProps) => {
  return (
    <Box
      sx={{ overflow: 'auto', border: '1px solid', ...sxProps }}
      ref={(node) => {
        if (node instanceof HTMLElement) {
          const { top } = node.getBoundingClientRect();
          node.style.height = `calc(100vh - ${top + DEFAULT_GAP}px)`;
        }
      }}
    >
      {children}
    </Box>
  );
};

export const ScrollableBox = ({ tabs }: ScrollableBoxProps) => {
  return (
    <Tabs
      variant='scrollable'
      TabIndicatorProps={{ style: { display: 'none' } }}
    >
      {tabs.map((tab) => (
        <Tab disableRipple key={tab.key} label={tab} />
      ))}
    </Tabs>
  );
};
