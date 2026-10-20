export const hexToRgba = (hex: string, alpha?: number): string => {
  // Normalize the hex string
  let normalizedHex = hex.replace(/^#/, '');
  if (normalizedHex.length === 3 || normalizedHex.length === 4) {
    normalizedHex = normalizedHex
      .split('')
      .map((c) => c + c)
      .join('');
  }
  if (normalizedHex.length !== 6 && normalizedHex.length !== 8) {
    throw new Error('Invalid HEX color format');
  }

  // Extract color components
  const r = parseInt(normalizedHex.slice(0, 2), 16);
  const g = parseInt(normalizedHex.slice(2, 4), 16);
  const b = parseInt(normalizedHex.slice(4, 6), 16);
  const a =
    normalizedHex.length === 8
      ? parseInt(normalizedHex.slice(6, 8), 16) / 255
      : 1;

  return `rgba(${r}, ${g}, ${b}, ${alpha ?? a})`;
};
