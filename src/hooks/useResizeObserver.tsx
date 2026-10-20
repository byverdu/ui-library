import { ResizeObserver } from '@juggle/resize-observer';
import { useTheme } from '@mui/material';
import { debounce } from 'lodash-es';
import { type RefObject, useEffect, useMemo, useRef, useState } from 'react';

import { resizeObserverCallback } from './utils/index';

type ValidDOMRect = keyof Pick<DOMRectReadOnly, 'height' | 'width'>;
type ElemToObserve = RefObject<Element | null> | Element | null | undefined;
type HookProps = {
  elemToObserve: ElemToObserve;
  debounceDelay?: number;
  propToTrack?: ValidDOMRect | 'all';
};
type State = { [key in ValidDOMRect]?: number };

const Resizer = window.ResizeObserver || ResizeObserver;
const getElement = (elem: ElemToObserve) =>
  elem && 'current' in elem ? elem.current : elem;

export const useResizeObserver = ({
  elemToObserve,
  debounceDelay,
  propToTrack = 'all',
}: HookProps) => {
  const [value, setValue] = useState<State>();
  const {
    transitions: { duration },
  } = useTheme();
  const delay = debounceDelay || duration.shortest;
  const target = getElement(elemToObserve);
  const tracker = useRef<State>();
  const callback = debounce(
    (entries, observer) =>
      resizeObserverCallback(entries, observer, setValue, tracker, propToTrack),
    delay,
  );

  useEffect(() => {
    let resizeObserver: ResizeObserver | null = null;

    if (target) {
      resizeObserver = new Resizer(callback);

      resizeObserver.observe(target);
    }

    return () => {
      if (target && resizeObserver) {
        resizeObserver.unobserve(target);
      }
    };
  }, [target, callback, value]);

  return useMemo(() => value, [value]);
};
