import RawLogo from '../../assets/logo.svg';
import type { SvgIconProps } from '@mui/material';
import { createSvgIcon } from '@mui/material';

/**
 * Props for the Logo component
 * @public
 */
export type LogoProps = SvgIconProps;

/**
 * A Logo component that renders the application logo as an SVG icon.
 * Extends Material-UI's SvgIcon component.
 *
 * @public
 * @param props - The component props (extends Material-UI SvgIconProps)
 * @returns A React component
 *
 * @example
 * ```tsx
 * <Logo sx={{ color: 'primary.main' }} />
 * ```
 */
const Logo = createSvgIcon(<RawLogo />, 'Logo');

export default Logo;
