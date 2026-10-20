import { Box } from '@mui/material';
import { Meta, StoryFn } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import ThemeProvider from '../../theme/ThemeProvider';
import Chip, { type ChipColors, type ChipProps } from './Chip';

export default {
  title: 'Chip',
  component: Chip,
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
} as Meta<typeof Chip>;

const Template: StoryFn<typeof Chip> = (args: ChipProps) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Chip label',
  variant: 'filled',
  color: 'primary',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'With icon',
  iconName: 'ChevronRight',
  iconFontSize: 'medium',
};

export const WithAvatarInitials = Template.bind({});
WithAvatarInitials.args = {
  label: 'Count',
  avatarData: { children: '1200' },
};

export const Square = Template.bind({});
Square.args = {
  label: 'Square',
  variant: 'square',
  color: 'secondary',
};

export const SquareFilled = Template.bind({});
SquareFilled.args = {
  label: 'Square filled',
  variant: 'square-filled',
  color: 'secondary',
};

const AllVariantsTemplate: StoryFn<typeof Chip> = (args: ChipProps) => (
  <Box sx={{ display: 'flex', gap: 2 }}>
    <Chip {...args} variant='filled' label='filled' />
    <Chip {...args} variant='outlined' label='outlined' />
    <Chip {...args} variant='square' label='square' />
    <Chip {...args} variant='square-filled' label='square-filled' />
  </Box>
);

export const AllVariants = AllVariantsTemplate.bind({});
AllVariants.args = {
  color: 'primary',
};
