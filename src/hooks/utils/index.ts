import type { Dispatch, SetStateAction } from 'react';

export type ValidDOMRect = keyof Pick<DOMRectReadOnly, 'height' | 'width'>;
type ResizeCallbackState = { [key in ValidDOMRect]?: number } | undefined;

/**
 * Callback function for the ResizeObserver. It will set the state with the new width and height values. It will also stop observing the element if the new values are the same as the previous ones tracked by the ref.
 *
 * @param {ResizeObserverEntry[]} entries - The ResizeObserverEntry array
 * @param {ResizeObserver} observer - The ResizeObserver instance
 * @param {Dispatch<SetStateAction<ResizeCallbackState>>} setter - The state setter
 * @param {React.MutableRefObject<ResizeCallbackState>} tracker - The ref that tracks the previous state
 */
export const resizeObserverCallback = (
  entries: ResizeObserverEntry[],
  observer: ResizeObserver,
  setter: Dispatch<SetStateAction<ResizeCallbackState>>,
  tracker: React.MutableRefObject<ResizeCallbackState>,
  propToTrack: ValidDOMRect | 'all',
) => {
  entries.forEach((entry) => {
    let result: { [key in ValidDOMRect]?: number } = {};

    if (propToTrack === 'all') {
      result = {
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      };
    } else {
      result[propToTrack] = entry.contentRect[propToTrack];
    }

    if (JSON.stringify(result) !== JSON.stringify(tracker.current)) {
      setter(result);
      // eslint-disable-next-line no-param-reassign
      tracker.current = result;
      observer.unobserve(entry.target);
    }
  });
};
