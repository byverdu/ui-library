export { useGetBoundingClientRect } from './hooks/useGetBoundingClientRect';
export { useSetTabTitle } from './hooks/useSetTabTitle';
export * from './theme/ThemeProvider';
export { default as ThemeProvider } from './theme/ThemeProvider';
export * from './theme/theme';

// Only export the MUI components that you want to expose
import { default as MUIBox } from '@mui/material/Box';

export default MUIBox;

export * from './lib/AppBar';
export { default as AppBar } from './lib/AppBar';
export * from './lib/AutoHeightBox';
export { default as AutoHeightBox } from './lib/AutoHeightBox';
export * from './lib/Checkbox';
export { default as Checkbox } from './lib/Checkbox';
// export * from './lib/Chip';
export { Chip, type ChipColors, type ChipProps } from './lib/Chip';
export * from './lib/Icon';
export { default as Icon } from './lib/Icon';
export * from './lib/IconButton';
export { default as IconButton } from './lib/IconButton';
export * from './lib/Logo';
export { default as Logo } from './lib/Logo';
export { PortalTooltip } from './lib/PortalTooltip';
export { castToBoolean } from './utils/castToBoolean';
export {
  type ValidDOMRect,
  getBoundingClientRectFromRange,
} from './utils/getBoundingClientRectFromRange';
export { hexToRgba } from './utils/hexToRgba';
export { measureTextWidth } from './utils/measureTextWidth';
