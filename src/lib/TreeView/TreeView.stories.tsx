import { Box, Typography } from '@mui/material';
import { Meta, StoryFn } from '@storybook/react-vite';
import type { ComponentProps } from 'react';

import TreeView from './TreeView';

type TreeViewProps = ComponentProps<typeof TreeView>;
type NodeData = TreeViewProps['data'];

const data: NodeData = {
  id: 1,
  text: 'Global',
  children: [
    {
      id: 11,
      text: 'EMEA',
      children: [
        {
          id: 111,
          text: 'Spain',
          children: [{ id: 1111, text: 'Barcelona', children: [] }],
        },
        { id: 112, text: 'France', children: [] },
      ],
    },
    { id: 12, text: 'AMER', children: [] },
  ],
};

const leafOnly: NodeData = {
  id: 2,
  text: 'Documents',
  children: [],
};

export default {
  title: 'TreeView',
  component: TreeView,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    data: { control: { disable: true } },
  },
} as Meta<typeof TreeView>;

const Template: StoryFn<typeof TreeView> = (args) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      alignItems: 'flex-start',
      width: 320,
    }}
  >
    <Typography variant='caption' color='text.secondary'>
      Click a node that has children to expand or collapse it.
    </Typography>
    <Box sx={{ width: '100%' }}>
      <TreeView {...args} />
    </Box>
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  data,
};

export const LeafNode = Template.bind({});
LeafNode.args = {
  data: leafOnly,
};
