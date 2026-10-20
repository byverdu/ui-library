import { ValidDOMRect, getBoundingClientRectFromRange } from '@utils';
import { useLayoutEffect, useState } from 'react';

type HookProps = {
  elem: Element | null | undefined;
  rectProp: ValidDOMRect;
};

export const useCompareRangeBoundingClientRectProp = ({
  elem,
  rectProp = 'width',
}: HookProps) => {
  const [isBiggerThan, setIsBiggerThan] = useState(false);

  useLayoutEffect(() => {
    if (elem) {
      const currentRectPropValue = elem.getBoundingClientRect()[rectProp];
      const realRectPropValue = getBoundingClientRectFromRange(elem, rectProp);

      setIsBiggerThan(realRectPropValue >= currentRectPropValue);
    }
  }, [rectProp, elem]);

  return isBiggerThan;
};
