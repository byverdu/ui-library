import {
  AppBar,
  Box,
  FormControlLabel,
  FormGroup,
  Typography,
  Chip,
  Skeleton,
} from '@mui/material';
import {
  Logo,
  useGetBoundingClientRect,
  AutoHeightBox,
  ScrollableBox,
} from '../src';
import { useEffect, useState } from 'react';
import { MaterialUISwitch } from './Switch';

export const Playground = () => {
  const [chips, setChips] = useState(
    Array.from({ length: 25 }, (_, index) => index),
  );
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const marginTop = useGetBoundingClientRect({
    cssSelector: '[data-header]',
    key: 'height',
  }) as number;

  useEffect(() => {
    document.body.style.backgroundColor = mode === 'light' ? 'white' : 'black';
  }, [mode]);

  return (
    <>
      <AppBar
        data-header
        sx={{
          padding: 2,
          justifyContent: 'space-between',
          flexDirection: 'row',
          '&:after': {
            content: '""',
            height: ({ spacing }) => spacing(2),
            position: 'absolute',
            width: '100%',
            bottom: ({ spacing }) => spacing(-2),
            left: 0,
            background: 'rgba(255, 255, 255, .8)',
          },
        }}
      >
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Logo
            sx={{
              color: 'white',
              alignSelf: 'center',
              width: '40px',
              height: '40px',
            }}
          />

          <Typography variant='h4'>Playground</Typography>
        </Box>
        <FormGroup>
          <FormControlLabel
            sx={{
              marginRight: 0,
            }}
            control={
              <MaterialUISwitch
                mode={mode}
                sx={{ m: 1 }}
                onChange={(ev) => {
                  setMode(ev.target.checked ? 'dark' : 'light');
                }}
              />
            }
            label=''
          />
        </FormGroup>
      </AppBar>
      <Box
        sx={{
          position: 'relative',
          top: ({ spacing }) => `${marginTop + spacing(2)}px`,
        }}
      >
        <Box sx={{ height: 200, border: '1px solid red' }}>
          <ScrollableBox
            tabs={chips.map((chip) => (
              <Chip
                key={chip}
                label={`${chip + 1}`}
                onDelete={() => setChips(chips.filter((ch) => ch !== chip))}
              />
            ))}
          />
        </Box>
        <AutoHeightBox sxProps={{ borderColor: 'yellowgreen' }}>
          {Array.from({ length: 20 }, () => (
            <Skeleton height={100} />
          ))}
        </AutoHeightBox>
      </Box>
    </>
  );
};
