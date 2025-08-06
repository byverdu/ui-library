import {
  ThemeProvider as Provider,
  createTheme,
  type ThemeOptions,
} from '@mui/material';
import { theme as defaultTheme } from '../theme';
import { ReactNode } from 'react';

/**
 * Props for the ThemeProvider component
 * @public
 */
type Props = {
  /** React children to be wrapped by the theme provider */
  children: ReactNode;
  /** Optional theme overrides to merge with the default theme */
  theme?: ThemeOptions;
};

type Option = keyof ThemeOptions;

/**
 * Merges a base theme with optional theme overrides
 * @param theme - The base theme to merge
 * @param overrideTheme - Optional theme overrides
 * @returns Merged theme options
 * @internal
 */
const themeBuilder = (theme: ThemeOptions, overrideTheme?: ThemeOptions) => {
  const themeOptions = [
    'mixins',
    'components',
    'palette',
    'shadows',
    'transitions',
    'typography',
    'zIndex',
  ] as unknown as Option[];

  return themeOptions.reduce((acc, option) => {
    const themeOption = theme[option];
    const overrideOption = overrideTheme && overrideTheme[option];

    if (typeof themeOption === 'object' || typeof overrideOption === 'object') {
      return {
        ...acc,
        [option]: {
          ...(themeOption as ThemeOptions),
          ...(overrideOption as ThemeOptions),
        },
      };
    }
    return acc;
  }, {} as ThemeOptions);
};

/**
 * A theme provider component that wraps Material-UI's ThemeProvider.
 * It allows for theme customization while maintaining the default theme as a base.
 *
 * @public
 * @param props - The component props
 * @param props.children - React children to be wrapped by the theme provider
 * @param props.theme - Optional theme overrides to merge with the default theme
 * @returns A React component
 *
 * @example
 * ```tsx
 * <ThemeProvider theme={{ palette: { primary: { main: '#ff0000' } } }}>
 *   <App />
 * </ThemeProvider>
 * ```
 */
const ThemeProvider = ({ children, theme }: Props) => {
  const _theme = createTheme(themeBuilder(defaultTheme, theme));

  return <Provider theme={_theme}>{children}</Provider>;
};

export default ThemeProvider;
