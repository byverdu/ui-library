import * as MUIcon from '@mui/icons-material';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputBase,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { Meta, StoryFn } from '@storybook/react-vite';
import { useMemo, useState } from 'react';
import { fn } from 'storybook/test';

import Icon, { FontSizes, type IconProps } from './';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/arg-types
  argTypes: {
    name: {
      control: { disable: true },
    },
    fontSize: {
      control: { disable: true },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
    args: { onClick: fn() },
  },
} as Meta<typeof Icon>;

function formatNumber(number: number) {
  return new Intl.NumberFormat('en-US').format(number);
}

type IconType =
  | 'All'
  | 'Filled'
  | 'Outlined'
  | 'Rounded'
  | 'TwoTone'
  | 'Sharp'

type IconName = IconProps['name'];

type Colors =
  | 'primary'
  | 'secondary'
  | 'action'
  | 'error'
  | 'disabled'
  | 'info'
  | 'success'
  | 'warning';

const isOutlined = (iconName: string) => /Outlined/.test(iconName);
const isRounded = (iconName: string) => /Rounded/.test(iconName);
const isTwoTone = (iconName: string) => /TwoTone/.test(iconName);
const isSharp = (iconName: string) => /Sharp/.test(iconName);
const isFilled = (iconName: string) =>
  !isOutlined(iconName) &&
  !isRounded(iconName) &&
  !isTwoTone(iconName) &&
  !isSharp(iconName);

const MuiIconNames = Object.keys(MUIcon);

const iconNamesFilteredByType = new Map<IconType, string[]>([
  ['All', MuiIconNames],
  ['Filled', MuiIconNames.filter(isFilled)],
  ['Outlined', MuiIconNames.filter(isOutlined)],
  ['Rounded', MuiIconNames.filter(isRounded)],
  ['TwoTone', MuiIconNames.filter(isTwoTone)],
  ['Sharp', MuiIconNames.filter(isSharp)],
]);

const MainArea = ({
  iconNames,
  onIconClick,
  ...args
}: IconProps & {
  iconNames: IconName[];
  onIconClick: (iconName: IconName) => void;
}) => {
  return (
    <Box
      ref={(node) => {
        if (node instanceof HTMLElement) {
          node.style.height = 'calc(100vh - 400px)';
        }
      }}
      sx={{
        gridArea: 'main',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'start',
        overflow: 'auto',
        gap: 1,
        justifyContent: 'space-between',
        '&::after': {
          content: '""',
          flex: 'auto',
        },
      }}
    >
      {iconNames.map((iconName) => (
        <Box
          sx={{
            padding: 1,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            width: '80px',
          }}
          key={iconName}
          onClick={() => onIconClick(iconName)}
        >
          <Icon
            {...args}
            key={iconName}
            name={iconName}
            sx={{
              boxSizing: 'content-box',
              cursor: 'pointer',
              borderRadius: ({ shape }) => shape.borderRadius,
              transition: ({ transitions }) =>
                transitions.create(['background-color', 'box-shadow'], {
                  duration: transitions.duration.shortest,
                }),
              padding: ({ spacing }) => spacing(2),
              margin: ({ spacing }) => spacing(0.5, 0),
              '&:hover': {
                backgroundColor: ({ palette }) => palette.background.paper,
                boxShadow: ({ shadows }) => shadows[1],
              },
            }}
          />
          <Typography
            key={`${iconName}-Typography`}
            fontSize='0.75rem'
            sx={{
              width: 'inherit',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              textAlign: 'center',
            }}
          >
            {iconName}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

const HeadNavArea = ({
  setIconType,
  iconType,
  resultsLength,
  setQuery,
  query,
}: {
  setIconType: (type: IconType) => void;
  setQuery: (query: string) => void;
  iconType: IconType;
  query: string;
  resultsLength: number;
}) => (
  <>
    <Box
      sx={{
        gridArea: 'head',
        padding: 1,
      }}
    >
      <Paper>
        <InputBase
          startAdornment={<Icon name='Search' />}
          endAdornment={
            <IconButton disabled={!query.length} size='small' onClick={() => setQuery('')}>
              <Icon name='Close' />
            </IconButton>
          }
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder='Search icons…'
          inputProps={{ 'aria-label': 'search icons', width: '100%' }}
          sx={{
            '&.MuiInputBase-root': {
              width: '100%',
              padding: 0.5,
              gap: 0.5,
            },
          }}
        />
      </Paper>
      <Typography sx={{ mt: 2 }}>
        {`${formatNumber(resultsLength)} matching results.`}
      </Typography>
    </Box>
    <Box
      sx={{
        gridArea: 'nav',
        padding: 1,
      }}
    >
      <FormControl>
        <FormLabel id='icons-story'>Filter the style</FormLabel>
        <RadioGroup
          aria-labelledby='icons-story'
          name='row-radio-buttons-group'
        >
          {(
            [
              'All',
              'Filled',
              'Outlined',
              'Rounded',
              'TwoTone',
              'Sharp',
            ] as IconType[]
          ).map((type) => (
            <FormControlLabel
              key={`type`}
              value={type}
              control={<Radio />}
              label={type}
              checked={iconType === type}
              onClick={() => setIconType(type)}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  </>
);

const Template: StoryFn<typeof Icon> = ({ ...args }: IconProps) => {
  const [iconType, setIconType] = useState<IconType>('Filled');
  const [selectedIcon, setSelectedIcon] = useState<IconName>('Abc');
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const filteredIcons = useMemo(
    () =>
      iconNamesFilteredByType
        .get(iconType)
        ?.filter((iconName) =>
          RegExp(query, 'gi').test(iconName),
        ) as IconName[],
    [query, iconType],
  );

  return (
    <Box
      sx={{
        gridTemplateAreas: `"nav head" "nav  main"`,
        gridTemplateColumns: 'minmax(0, auto) minmax(0, 1fr)',
        display: 'grid',
      }}
    >
      <HeadNavArea
        resultsLength={filteredIcons.length}
        setIconType={setIconType}
        iconType={iconType}
        setQuery={setQuery}
        query={query}
      />
      <MainArea
        onIconClick={(iconName) => {
          setSelectedIcon(iconName);
          setOpen((prev) => !prev);
        }}
        iconNames={filteredIcons}
        {...args}
      />
      <Dialog
        open={open}
        onClose={() => setOpen((prev) => !prev)}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          <Typography sx={{ fontWeight: 'bold' }}>{selectedIcon}</Typography>
        </DialogTitle>
        <IconButton
          aria-label='close'
          onClick={() => setOpen((prev) => !prev)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Icon name='Close' />
        </IconButton>
        <DialogContent dividers>
          <Icon name={selectedIcon} sx={{ fontSize: '6rem' }} />
          <Box>
            <Typography variant='h6'>Sizes</Typography>
            {(['large', 'medium', 'small'] as FontSizes[]).map((size) => (
              <>
                <Icon
                  key={size}
                  name={selectedIcon}
                  fontSize={size}
                  sx={{ margin: 1 }}
                />
                <Typography variant='caption'>{size}</Typography>
              </>
            ))}
          </Box>
          <Box>
            <Typography variant='h6'>Colors</Typography>
            {(
              [
                'primary',
                'secondary',
                'success',
                'warning',
                'error',
                'disabled',
                'info',
              ] as Colors[]
            ).map((color) => (
              <>
                <Icon
                  key={color}
                  name={selectedIcon}
                  color={color}
                  sx={{ margin: 1 }}
                />
                <Typography variant='caption'>{color}</Typography>
              </>
            ))}
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export const Basic = Template.bind({});

Basic.args = {
  fontSize: 'large',
  name: 'Abc',
};
