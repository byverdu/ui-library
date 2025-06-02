import { ThemeOptions } from '@mui/material';
import colors from './color';
import type { PaletteOverrides } from './types';

export const palette: PaletteOverrides = {
  primary: {
    main: colors.BLUE[700],
    dark: colors.BLUE[900],
    light: colors.BLUE[500],
    lightBackground: colors.BLUE[50],
    contrastText: colors.COMMON.WHITE,
    disabled: colors.BLUE[300],
  },
  secondary: {
    main: colors.YELLOW[700],
    dark: colors.YELLOW[900],
    light: colors.YELLOW[500],
    lightBackground: colors.YELLOW[50],
    contrastText: colors.COMMON.WHITE,
    disabled: colors.YELLOW[200],
  },
  error: {
    main: colors.RED[700],
    dark: colors.RED[900],
    light: colors.RED[500],
    lightBackground: colors.RED[50],
    contrastText: colors.COMMON.WHITE,
    disabled: colors.RED[200],
  },
  warning: {
    main: colors.ORANGE[700],
    dark: colors.ORANGE[900],
    light: colors.ORANGE[400],
    lightBackground: colors.ORANGE[50],
    contrastText: colors.COMMON.WHITE,
    disabled: colors.ORANGE[200],
  },
  info: {
    main: colors.INFO_BLUE[700],
    dark: colors.INFO_BLUE[900],
    light: colors.INFO_BLUE[400],
    lightBackground: colors.INFO_BLUE[50],
    contrastText: colors.COMMON.WHITE,
    disabled: colors.INFO_BLUE[200],
  },
  success: {
    main: colors.GREEN[700],
    dark: colors.GREEN[900],
    light: colors.GREEN[500],
    lightBackground: colors.GREEN[50],
    contrastText: colors.COMMON.WHITE,
    disabled: colors.GREEN[200],
  },
  tertiary: {
    main: colors.VIOLET[700],
    dark: colors.VIOLET[900],
    light: colors.VIOLET[500],
    lightBackground: colors.VIOLET[50],
    contrastText: colors.COMMON.WHITE,
  },
  text: {
    primary: colors.BLACK_SHADES[900],
    secondary: colors.BLACK_SHADES[400],
    disabled: colors.BLACK_SHADES[75],
  },
  common: {
    black: colors.COMMON.BLACK,
    white: colors.COMMON.WHITE,
  },
  background: {
    default: colors.BLACK_SHADES[15],
  },
  grey: {
    50: colors.GREY_NEUTRAL[50],
    100: colors.GREY_NEUTRAL[100],
    200: colors.GREY_NEUTRAL[200],
    300: colors.GREY_NEUTRAL[300],
    400: colors.GREY_NEUTRAL[400],
    500: colors.GREY_NEUTRAL[500],
    600: colors.GREY_NEUTRAL[600],
    700: colors.GREY_NEUTRAL[700],
    800: colors.GREY_NEUTRAL[800],
    900: colors.GREY_NEUTRAL[900],
    A100: colors.GREY[100],
    A200: colors.GREY[200],
    A400: colors.GREY[400],
    A700: colors.GREY[700],
  },
  blackShades: {
    15: colors.BLACK_SHADES[15],
    25: colors.BLACK_SHADES[25],
    50: colors.BLACK_SHADES[50],
    75: colors.BLACK_SHADES[75],
    85: colors.BLACK_SHADES[85],
    100: colors.BLACK_SHADES[100],
    200: colors.BLACK_SHADES[200],
    300: colors.BLACK_SHADES[300],
    400: colors.BLACK_SHADES[400],
    500: colors.BLACK_SHADES[500],
    600: colors.BLACK_SHADES[600],
    700: colors.BLACK_SHADES[700],
    800: colors.BLACK_SHADES[800],
    900: colors.BLACK_SHADES[900],
  },
  neutral: {
    main: colors.GREY[700],
    light: colors.GREY[500],
    dark: colors.GREY[900],
    text: colors.GREY[300],
    lightBackground: colors.GREY[50],
    contrastText: colors.COMMON.WHITE,
  },
};

const fontFamily = 'sans-serif';
const spacing = (factor: number) => `${0.5 * factor}rem`;

export const theme = {
  typography: {
    fontFamily,
  },
  palette,
  spacing,
} as ThemeOptions;
