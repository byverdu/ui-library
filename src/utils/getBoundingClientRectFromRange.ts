export type ValidDOMRect = keyof Omit<DOMRectReadOnly, 'toJSON'>;

export function getBoundingClientRectFromRange(refElem: Element): DOMRect;
export function getBoundingClientRectFromRange(
  refElem: Element,
  rectProp: ValidDOMRect,
): number;

export function getBoundingClientRectFromRange(
  refElem: Element,
  rectProp?: ValidDOMRect,
) {
  const range = new Range();

  range.selectNodeContents(refElem);

  const boundingRect = range.getBoundingClientRect();

  return rectProp ? boundingRect[rectProp] : boundingRect;
}
