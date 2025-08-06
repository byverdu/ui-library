import {
  Box,
  AppBar as MUIAppBar,
  AppBarProps as MUIAppBarProps,
  Typography,
} from '@mui/material';
import Logo from '../Logo';

/**
 * Props for the AppBar component
 * @public
 */
export type AppBarProps = MUIAppBarProps & {
  /** Optional title to display in the AppBar */
  title?: string;
  /** Whether to show the logo in the AppBar */
  withLogo?: boolean;
};

/**
 * A customizable AppBar component that extends Material-UI's AppBar.
 * It can display a logo, title, and additional children components.
 *
 * @public
 * @param props - The component props
 * @param props.title - Optional title to display in the AppBar
 * @param props.withLogo - Whether to show the logo in the AppBar
 * @param props.children - Additional components to render in the AppBar
 * @returns A React component
 *
 * @example
 * ```tsx
 * <AppBar title="My App" withLogo>
 *   <Button>Login</Button>
 * </AppBar>
 * ```
 */
const AppBar = ({ title, withLogo, children, ...props }: AppBarProps) => {
  return (
    <MUIAppBar {...props}>
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        {withLogo && <Logo sx={{ color: 'white' }} />}
        {title && <Typography variant='h5'>{title}</Typography>}
      </Box>
      {children}
    </MUIAppBar>
  );
};

export default AppBar;
