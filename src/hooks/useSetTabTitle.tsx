import { useEffect } from 'react';

/**
 * A hook that sets the document title (browser tab title).
 * Updates the title whenever the provided title changes.
 *
 * @public
 * @param title - The title to set for the document
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   useSetTabTitle('My Page Title');
 *   return <div>Content</div>;
 * }
 * ```
 */
export const useSetTabTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
