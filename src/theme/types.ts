/**
 * Represents the color configuration for a theme color variant
 * @public
 */
export type ThemeColors = {
  /** Main color value */
  main: string;
  /** Dark variant of the color */
  dark: string;
  /** Light variant of the color */
  light: string;
  /** Text color that contrasts with the main color */
  contrastText: string;
  /** Light background color variant */
  lightBackground?: string;
  /** Disabled state color */
  disabled?: string;
};

/**
 * Extended palette configuration that includes custom color schemes
 * and additional color variations beyond Material-UI's default palette.
 *
 * @public
 */
export type PaletteOverrides = {
  /** Common colors used throughout the theme */
  common: {
    black: string;
    white: string;
  };
  /** Primary color scheme */
  primary: ThemeColors;
  /** Secondary color scheme */
  secondary: ThemeColors;
  /** Error state color scheme */
  error: ThemeColors;
  /** Warning state color scheme */
  warning: ThemeColors;
  /** Info state color scheme */
  info: ThemeColors;
  /** Success state color scheme */
  success: ThemeColors;
  /** Neutral color scheme with additional text color */
  neutral: ThemeColors & { text: string };
  /** Grey color scale */
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
  /** Text color variants */
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  /** Background color configuration */
  background?: {
    default: string;
  };
  /** Tertiary color scheme */
  tertiary: {
    main: string;
    dark: string;
    light: string;
    lightBackground: string;
    contrastText: string;
  };
  /** Black color scale with various shades */
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
