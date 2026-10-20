import type { SxProps, Theme } from '@mui/material';
import Tooltip, { type TooltipProps } from '@mui/material/Tooltip';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = Omit<TooltipProps, 'children'> & {
  enterDelay?: number; maxWidth?: number | string; sxTooltip?: SxProps<Theme>
};

const PortalTooltip = ({
  target,
  title,
  enterDelay = 300,
  maxWidth,
  sxTooltip,
  ...rest
}: { target: HTMLElement } & Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), enterDelay);
    return () => clearTimeout(timer);
  }, [enterDelay]);

  if (!show) return null;

  return createPortal(
    <Tooltip
      title={title}
      open
      arrow
      slotProps={{
        popper: {
          anchorEl: target,
          open: true,
          sx: { pointerEvents: 'none' },
        },
        tooltip: {
          sx: {
            maxWidth,
            ...sxTooltip
          }
        }
      }}
      {...rest}
    >
      <span style={{ display: 'none' }} />
    </Tooltip>,
    document.body,
  );
};

export default PortalTooltip;
