import { PortalTooltip } from '@lib';
import { Typography } from '@mui/material';
import { getBoundingClientRectFromRange } from '@utils';
import { useState } from 'react';

const TextWithTooltip = ({ text }: { text: string }) => {
  const [tooltipTarget, setTooltipTarget] = useState<HTMLElement | null>(null);

  return (
    <>
      <Typography
        display='block'
        textOverflow='ellipsis'
        overflow='hidden'
        whiteSpace='nowrap'
        variant='body2Regular'
        onMouseEnter={(event) => {
          const elem = event.currentTarget;
          const elemWidth = elem.getBoundingClientRect().width;
          const elemTextWidth = getBoundingClientRectFromRange(elem, 'width');

          setTooltipTarget(elemTextWidth > elemWidth ? elem : null);
        }}
        onMouseLeave={() => setTooltipTarget(null)}
      >
        {text}
      </Typography>
      {tooltipTarget && (
        <PortalTooltip
          title={text}
          target={tooltipTarget}
          placement='bottom'
          disableInteractive
          maxWidth={tooltipTarget.clientWidth}
        />
      )}
    </>
  );
};

export default TextWithTooltip;
