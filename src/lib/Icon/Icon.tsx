import * as MUIIcon from "@mui/icons-material";
import type { SvgIconProps as MUIIconProps } from "@mui/material";

export type IconNames = keyof typeof MUIIcon;
export type IconProps = MUIIconProps & { name: IconNames };
export type FontSizes = MUIIconProps['fontSize'];

const Icon = ({ name, ...rest }: IconProps) => {
  const CurrentIcon = MUIIcon[name];

  return CurrentIcon ? <CurrentIcon {...rest} /> : null;
};

export default Icon;
