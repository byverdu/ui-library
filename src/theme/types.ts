export type ThemeColors = {
  main: string;
  dark: string;
  light: string;
  contrastText: string;
  lightBackground?: string;
  disabled?: string;
};

export type PaletteOverrides = {
  common: {
    black: string;
    white: string;
  };
  primary: ThemeColors;
  secondary: ThemeColors;
  error: ThemeColors;
  warning: ThemeColors;
  info: ThemeColors;
  success: ThemeColors;
  neutral: ThemeColors & { text: string };
  grey: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    A100: string;
    A200: string;
    A400: string;
    A700: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  background?: {
    default: string;
  };
  tertiary: {
    main: string;
    dark: string;
    light: string;
    lightBackground: string;
    contrastText: string;
  };
  blackShades: {
    15: string;
    25: string;
    50: string;
    75: string;
    85: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
};
