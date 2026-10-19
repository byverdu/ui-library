import { useMemo } from 'react';

export const useElementHasOverflow = (
  ref: HTMLElement | null,
  overflow: 'horizontal' | 'vertical' = 'horizontal',
) => {

  const hasOverflow = useMemo(
    () => {
      const clientProp = overflow === 'horizontal' ? 'clientWidth' : 'clientHeight';
      const scrollProp = overflow === 'horizontal' ? 'scrollWidth' : 'scrollHeight';

      return (ref?.[clientProp] || 0) < (ref?.[scrollProp] || 0)
    },
    [ref, overflow],
  );

  return hasOverflow;
};
