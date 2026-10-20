import { Chip, type ChipProps } from '@lib';
import { useEffect, useState } from 'react';

export type ToggleableChipProps = ChipProps & {
  onClick?: () => void;
  hideIcon?: boolean;
  badgeCount?: string;
};

const ToggleableChip = ({
  onClick,
  hideIcon = true,
  defaultChecked = false,
  color = 'primary',
  badgeCount,
  ...rest
}: ToggleableChipProps) => {
  const [expanded, setExpanded] = useState(defaultChecked);
  const handleClick = () => {
    setExpanded((prev) => !prev);
    onClick?.();
  };

  useEffect(() => {
    if (defaultChecked !== expanded) {
      setExpanded(defaultChecked);
    }
  }, [defaultChecked, expanded]);

  return (
    <Chip
      data-expanded={expanded}
      data-testid='toggleable-chip'
      iconSx={{
        transition: 'transform .5s',
        transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)',
      }}
      size='small'
      color={color}
      onClick={onClick && handleClick}
      iconName={hideIcon ? undefined : 'ChevronRight'}
      avatarData={badgeCount ? { children: badgeCount } : undefined}
      {...rest}
    />
  );
};

export default ToggleableChip;
