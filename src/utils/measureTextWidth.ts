const canvas = document.createElement('canvas');
export const measureTextWidth = (text: string, font = '12px sans-serif') => {
  const context = canvas.getContext('2d');

  if (!context) {
    return 0;
  }

  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
};
