import { Box, Typography } from '@mui/material';
import { Meta, StoryFn } from '@storybook/react-vite';
import { ReactNode } from 'react';

import ThemeProvider from '../../theme/ThemeProvider';
import Layout, { type LayoutProps } from './';

const AreaBox = ({ area, children }: { area: string; children: ReactNode }) => (
  <Box
    sx={{
      gridArea: area,
      border: '1px dashed',
      borderColor: 'divider',
      p: 2,
    }}
  >
    <Typography variant='caption'>{children}</Typography>
  </Box>
);

export default {
  title: 'Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Box sx={{ height: '100vh' }}>
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    headNavArea: { control: { disable: true } },
    mainArea: { control: { disable: true } },
    footArea: { control: { disable: true } },
  },
} as Meta<typeof Layout>;

const Template: StoryFn<typeof Layout> = (args: LayoutProps) => (
  <Layout {...args} />
);

export const Default = Template.bind({});
Default.args = {
  headNavArea: (
    <>
      <AreaBox area='head'>head</AreaBox>
      <AreaBox area='nav'>nav</AreaBox>
    </>
  ),
  mainArea: <AreaBox area='main'>main</AreaBox>,
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  gridTemplateAreas: `"nav head" "nav main" "nav foot"`,
  gridTemplateRows: '48px auto 56px',
  headNavArea: (
    <>
      <AreaBox area='head'>head</AreaBox>
      <AreaBox area='nav'>nav</AreaBox>
    </>
  ),
  mainArea: <AreaBox area='main'>main</AreaBox>,
  footArea: <AreaBox area='foot'>foot</AreaBox>,
};

export const NoAppBar = Template.bind({});
NoAppBar.args = {
  appBarHeight: 0,
  headNavArea: <AreaBox area='nav'>nav</AreaBox>,
  mainArea: <AreaBox area='main'>main</AreaBox>,
};

export const CustomColumns = Template.bind({});
CustomColumns.args = {
  gridTemplateColumns: '240px minmax(0, 1fr)',
  headNavArea: (
    <>
      <AreaBox area='head'>head</AreaBox>
      <AreaBox area='nav'>nav (fixed 240px)</AreaBox>
    </>
  ),
  mainArea: <AreaBox area='main'>main</AreaBox>,
};
