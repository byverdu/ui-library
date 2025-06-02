import {
  AppBar,
  Box,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material';
import { Logo, useGetBoundingClientRect, Checkbox } from '../src';
import { useEffect, useState } from 'react';
import { MaterialUISwitch } from './Switch';

export const Playground = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const marginTop =
    useGetBoundingClientRect({
      cssSelector: '[data-header]',
      key: 'height',
    }) + 'px';

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
          width: '100%',
          marginTop,
          display: 'flex',
          height: '88vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Checkbox color='error' />
      </Box>
    </>
  );
};
