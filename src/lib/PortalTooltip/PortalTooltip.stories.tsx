import { Box, Button } from '@mui/material';
import type { TooltipProps } from '@mui/material/Tooltip';
import { Meta, StoryFn } from '@storybook/react-vite';
import { useState } from 'react';

import PortalTooltip from './PortalTooltip';

type Args = {
  title: TooltipProps['title'];
  placement?: TooltipProps['placement'];
  enterDelay?: number;
};

export default {
  title: 'PortalTooltip',
  component: PortalTooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Renders a MUI Tooltip anchored to an external DOM node via a portal into `document.body`, instead of wrapping its own children. It opens automatically `enterDelay` ms after the target is available.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top',
        'bottom',
        'left',
        'right',
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
        'left-start',
        'left-end',
        'right-start',
        'right-end',
      ],
    },
  },
} as Meta<typeof PortalTooltip>;

const Template: StoryFn<Args> = ({ title, placement, enterDelay }) => {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  return (
    <Box sx={{ p: 10 }}>
      <Button variant='contained' onMouseEnter={(event) => {
        setTarget(event.currentTarget);
      }}
        onMouseLeave={() => setTarget(null)}>
        Hover target
      </Button>
      {target && (
        <PortalTooltip
          target={target}
          title={title}
          placement={placement}
          enterDelay={enterDelay}
        />
      )}
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Portal tooltip content',
  placement: 'top',
  enterDelay: 300,
};

export const CustomPlacement = Template.bind({});
CustomPlacement.args = {
  title: 'Anchored to the right',
  placement: 'right',
  enterDelay: 300,
};

export const LongDelay = Template.bind({});
LongDelay.args = {
  title: 'Appears after 1.5s',
  placement: 'top',
  enterDelay: 1500,
};
