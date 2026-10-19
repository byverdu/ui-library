import { type ChipColors } from '@lib';
import { Box } from '@mui/material';
import { Meta, StoryFn } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import ThemeProvider from '../../theme/ThemeProvider';
import { ToggleableChip, type ToggleableChipProps } from '.';

export default {
  title: 'ToggleableChip',
  component: ToggleableChip,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Box sx={{ p: 2 }}>
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'square', 'square-filled'],
    },
    color: {
      control: 'select',
      options: [
        'default',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
      ] as ChipColors[],
    },
    iconFontSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    responsiveBreakpointToHideLabel: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    avatarData: {
      control: { disable: true },
    },
    iconSx: {
      control: { disable: true },
    },
    args: { onClick: fn(), onDelete: fn() },
  },
} as Meta<typeof ToggleableChip>;

const ToggleableTemplate: StoryFn<typeof ToggleableChip> = (
  args: ToggleableChipProps,
) => <ToggleableChip {...args} />;

export const Toggleable = ToggleableTemplate.bind({});
Toggleable.args = {
  label: 'Toggle me',
  hideIcon: false,
};

export const ToggleableExpanded = ToggleableTemplate.bind({});
ToggleableExpanded.args = {
  label: 'Expanded',
  hideIcon: false,
  defaultChecked: true,
};

export const ToggleableWithBadge = ToggleableTemplate.bind({});
ToggleableWithBadge.args = {
  label: 'Notifications',
  hideIcon: false,
  badgeCount: '1200',
};
