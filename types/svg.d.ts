declare module '*.svg' {
  import * as React from 'react';

  // For default export
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;

  // For named export
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;

  // If you also want to use the SVG as a URL
  export const src: string;
}
