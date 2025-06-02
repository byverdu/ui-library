import { useEffect, useState } from 'react';

type BoundingHookProps = {
  cssSelector: string;
  key?: keyof DOMRect;
};

export const useGetBoundingClientRect = ({
  cssSelector,
  key,
}: BoundingHookProps) => {
  const [value, setValue] = useState<DOMRect | number | null>(null);
  useEffect(() => {
    const refElem = document.querySelector(cssSelector);
    if (refElem) {
      const dimensions = refElem.getBoundingClientRect();
      setValue(key ? dimensions[key] : dimensions);
    }
  }, [cssSelector, key]);

  return value;
};
