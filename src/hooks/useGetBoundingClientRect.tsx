import { useEffect, useState } from 'react';

/**
 * Props for the useGetBoundingClientRect hook
 * @public
 * @property cssSelector - CSS selector to find the target element
 * @property key - Optional specific dimension to retrieve from the DOMRect
 */
type BoundingHookProps = {
  /** CSS selector to find the target element */
  cssSelector: string;
  /** Optional specific dimension to retrieve from the DOMRect */
  key?: keyof DOMRect;
};

/**
 * A hook that retrieves the bounding client rectangle of an element.
 * Can return either the full DOMRect or a specific dimension.
 * Updates when the element's dimensions change.
 *
 * @public
 * @param props - The hook props
 * @param props.cssSelector - CSS selector to find the target element
 * @param props.key - Optional specific dimension to retrieve from the DOMRect
 * @returns The DOMRect object or a specific dimension value, or null if element not found
 *
 * @example
 * ```tsx
 * // Get full dimensions
 * const dimensions = useGetBoundingClientRect({ cssSelector: '.my-element' });
 *
 * // Get specific dimension
 * const width = useGetBoundingClientRect({
 *   cssSelector: '.my-element',
 *   key: 'width'
 * });
 * ```
 */
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
