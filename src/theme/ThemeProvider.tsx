import {
  ThemeProvider as Provider,
  createTheme,
  type ThemeOptions,
} from '@mui/material';
import { theme as defaultTheme } from '../theme';
import { ReactNode } from 'react';

type Props = { children: ReactNode; theme?: ThemeOptions };
type Option = keyof ThemeOptions;

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

const ThemeProvider = ({ children, theme }: Props) => {
  const _theme = createTheme(themeBuilder(defaultTheme, theme));

  return <Provider theme={_theme}>{children}</Provider>;
};

export default ThemeProvider;
