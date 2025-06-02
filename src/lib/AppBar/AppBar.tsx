import {
  Box,
  AppBar as MUIAppBar,
  AppBarProps as MUIAppBarProps,
  Typography,
} from '@mui/material';
import Logo from '../Logo';

export type AppBarProps = MUIAppBarProps & {
  title?: string;
  withLogo?: boolean;
};

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
