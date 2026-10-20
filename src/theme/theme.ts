import type { SxProps, Theme, ThemeOptions } from '@mui/material';

import { customTypography, palette, spacing } from './overrides';

/**
 * The default theme configuration.
 * Extends Material-UI's ThemeOptions with custom typography, palette, and spacing.
 *
 * @public
 */
export const theme = {
  typography: {
    ...customTypography,
  },
  palette,
  spacing,
  components: {
    MuiCssBaseline: {
      styleOverrides: ({ palette, breakpoints }: Theme) => ({
        '*': {
          '&::-webkit-scrollbar': {
            height: 5,
            width: 5,
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '0',
            backgroundColor: palette.blackShades[10],
          },
        },
        [breakpoints.down('small')]: {
          body: {
            maxWidth: '200px',
          },
        },
      }),
    },
    MuiChip: {
      variants: [
        {
          props: { variant: 'square' },
          style: {
            borderRadius: 0,
          },
        },
        {
          props: { variant: 'square-filled' },
          style: {
            borderRadius: 0,
          },
        },
      ],
    },
  },
} as ThemeOptions;

export const sxValidator = (
  sx: SxProps<Theme> | undefined,
  theme: Theme,
): Record<string, unknown> =>
  ((typeof sx === 'function' ? sx(theme) : sx) as Record<string, unknown>) ||
  {};
