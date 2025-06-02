import RawLogo from '../../assets/logo.svg';
import type { SvgIconProps } from '@mui/material';
import { createSvgIcon } from '@mui/material';

export type LogoProps = SvgIconProps;

const Logo = createSvgIcon(<RawLogo />, 'Logo');

export default Logo;
