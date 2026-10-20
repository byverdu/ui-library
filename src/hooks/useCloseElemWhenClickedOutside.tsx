import { type Dispatch, type RefObject, type SetStateAction, useEffect } from 'react';

export function useCloseElemWhenClickedOutside<T extends HTMLElement>(
  refElem: RefObject<T | null>,
  callback: Dispatch<SetStateAction<boolean>>,
) {
  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (
        refElem.current &&
        e.target &&
        !refElem.current.contains(e.target as Node)
      ) {
        callback(false);
      } else {
        callback(true);
      }
    };
    window.addEventListener('click', checkIfClickedOutside);

    return () => {
      window.removeEventListener('click', checkIfClickedOutside);
    };
  }, [callback, refElem]);
}
