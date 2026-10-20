import '@mui/material/styles/createPalette';
import '@mui/material/styles';
import '@mui/material';

import { CSSProperties } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import type { BlackShades, ThemeColors } from '@types';

declare module '@mui/material/styles/createPalette' {
  interface TypeText {
    tertiary: string;
  }

  interface PaletteColor {
    disabled: string;
    lightBackground: string;
    darkBackground: string;
  }

  interface Palette {
    blackShades: BlackShades;
    neutral: ThemeColors & { text: string };
  }

  interface PaletteOptions {
    blackShades: BlackShades;
    neutral: ThemeColors & { text: string };
  }
}

declare module '@mui/system' {
  interface TypeText {
    tertiary: string;
  }

  interface Palette {
    blackShades: BlackShades;
  }

  interface PaletteOptions {
    blackShades: BlackShades;
  }
}

declare module '@mui/material' {
  interface TypeText {
    tertiary: string;
  }

  interface Palette {
    blackShades: BlackShades;
    neutral: ThemeColors & { text: string };
  }

  interface PaletteOptions {
    blackShades: BlackShades;
    neutral: ThemeColors & { text: string };
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    tiny: true;
    small: true;
    medium: true;
    normal: true;
    large: true;
    huge: true;
    massive: true;
  }
  interface ZIndex {
    summaryDrawer: number;
    taskAlert: number;
    page: number;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1Regular: true;
    h1Bold: true;
    h2Regular: true;
    h2Bold: true;
    h3Regular: true;
    h3Bold: true;
    h4Regular: true;
    h4Semibold: true;
    h5Regular: true;
    h5Semibold: true;
    h6Regular: true;
    h6Semibold: true;
    body1Semibold: true;
    body1Regular: true;
    body1RegularUnderline: true;
    body1SemiboldUnderline: true;
    body2Semibold: true;
    body2Regular: true;
    subtitle1Regular: true;
    subtitle1Semibold: true;
    subtitle2Regular: true;
    subtitle2Bold: true;
    captionRegular: true;
    captionSemibold: true;
    tooltip: true;
    inputText: true;
    inputLabel: true;
  }
}

export interface ExtendedTypographyOptions extends TypographyOptions {
  h1Regular: CSSProperties;
  h1Bold: CSSProperties;
  h2Regular: CSSProperties;
  h2Bold: CSSProperties;
  h3Regular: CSSProperties;
  h3Bold: CSSProperties;
  h4Regular: CSSProperties;
  h4Semibold: CSSProperties;
  h5Regular: CSSProperties;
  h5Semibold: CSSProperties;
  body1Semibold: CSSProperties;
  body1Regular: CSSProperties;
  body1RegularUnderline: CSSProperties;
  body1SemiboldUnderline: CSSProperties;
  body2Semibold: CSSProperties;
  body2Regular: CSSProperties;
  subtitle1Regular: CSSProperties;
  subtitle1Semibold: CSSProperties;
  subtitle2Regular: CSSProperties;
  subtitle2Bold: CSSProperties;
  captionRegular: CSSProperties;
  captionSemibold: CSSProperties;
  tooltip: CSSProperties;
  inputText: CSSProperties;
  inputLabel: CSSProperties;
  listItemPrimaryText: CSSProperties;
  listItemSecondaryText: CSSProperties;
  listItemSubheaderText: CSSProperties;
  helperText: CSSProperties;
}

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    square: true;
    'square-filled': true;
  }
}
