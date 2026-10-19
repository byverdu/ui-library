import { Box, Button, Typography } from '@mui/material';
import { Meta, StoryFn } from '@storybook/react-vite';
import { useState } from 'react';

import TextWithTooltip from './TextWithTooltip';

const longText =
  'This is a long piece of text that gets truncated once the container becomes too narrow to fit it.';

export default {
  title: 'TextWithTooltip',
  component: TextWithTooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Truncates its text with an ellipsis once its container is too narrow to fit it, and reveals the full text in a PortalTooltip on hover when truncated.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
  },
} as Meta<typeof TextWithTooltip>;

const Template: StoryFn<typeof TextWithTooltip> = ({ text }) => {
  const [shrink, setShrink] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'flex-start',
      }}
    >
      <Typography variant='caption' color='text.secondary'>
        Hover the text once it is truncated to reveal the tooltip.
      </Typography>
      <Button variant='contained' onClick={() => setShrink((prev) => !prev)}>
        {shrink ? 'Expand box' : 'Shrink box'}
      </Button>
      <Box
        sx={{
          width: shrink ? 140 : 620,
          transition: (theme) =>
            theme.transitions.create('width', {
              duration: theme.transitions.duration.complex,
            }),
          border: '1px dashed',
          borderColor: 'divider',
          p: 2,
        }}
      >
        <TextWithTooltip text={text} />
      </Box>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  text: longText,
};
