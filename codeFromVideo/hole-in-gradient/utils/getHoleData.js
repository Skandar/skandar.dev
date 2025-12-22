export const getHoleData = (el) => {
  const cs = window.getComputedStyle(el);

  const markerPosition = parseFloat(cs.getPropertyValue('--marker-position'));
  const gradientStart = parseFloat(cs.getPropertyValue('--gradient-start'));
  const gradientEnd = parseFloat(cs.getPropertyValue('--gradient-end'));
  const r = parseFloat(cs.getPropertyValue('--hole-radius'));

  const width = el.clientWidth;

  const holePosition =
    100 * (markerPosition - gradientStart) /
    ((100 - gradientStart) - (100 - gradientEnd));
  const x = (holePosition / 100) * width;
  const yTop = r / -2;
  const yBottom = r * 1.5;

  return {
    x,
    yTop,
    yBottom,
    r
  }
}
