import { Icon, IconNames, type IconProps } from '@lib';
import {
  Avatar,
  Chip as MUIChip,
  type ChipProps as MUIChipProps,
  type SxProps,
  type Theme,
  useMediaQuery,
} from '@mui/material';

type AvatarChildren = {
  children?: string;
  src?: string;
};

export type ChipColors = NonNullable<MUIChipProps['color']>;

export type ChipProps = MUIChipProps & {
  avatarData?: AvatarChildren;
  iconName?: IconNames;
  iconSx?: SxProps<Theme>;
  iconFontSize?: IconProps['fontSize'];
  responsiveBreakpointToHideLabel?: keyof Theme['breakpoints']['values'];
};

const getValueToDisplay = (item: string) => {
  const toNumber = Number(item);
  if (typeof toNumber !== 'number') {
    return item;
  }
  return item.length > 3 ? `${toNumber / 1000}k` : item;
};

const Chip = ({
  avatarData,
  iconName,
  color = 'primary',
  sx,
  iconSx,
  iconFontSize = 'medium',
  responsiveBreakpointToHideLabel = 'small',
  label,
  ...rest
}: ChipProps) => {
  const hideLabel = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down(responsiveBreakpointToHideLabel),
  );

  return (
    <MUIChip
      data-testid='chip-component'
      {...rest}
      label={hideLabel ? undefined : label}
      color={color}
      avatar={
        avatarData && (
          <Avatar src={avatarData.src} color={color} className={rest.className}>
            {getValueToDisplay(avatarData.children ?? '')}
          </Avatar>
        )
      }
      icon={
        iconName && (
          <Icon
            fontSize={iconFontSize}
            name={iconName}
            sx={{
              paddingLeft: ({ spacing }) => spacing(0.5),
              ...iconSx,
            }}
          />
        )
      }
    />
  );
};

export default Chip;
