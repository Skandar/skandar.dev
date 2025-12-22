import { getHoleData } from "../utils/getHoleData.js";

const fillElement = document.querySelector('.clip--svg-clip-path');

function updateClipPath(el) {
  const svg = el.querySelector('svg');
  const clipPath = el.querySelector('clipPath path');

  const width = el.clientWidth;
  const height = el.clientHeight;

  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

  const { x, yTop, yBottom, r } = getHoleData(el);

  const path = [
    'M 0 0' ,
    `H ${width}`,
    `V ${height}`,
    'H 0',
    'Z',
    `M ${x} ${yTop}`,
    `A ${r} ${r} 0 1 0 ${x} ${yBottom}`,
    `A ${r} ${r} 0 1 0 ${x} ${yTop} `
  ].join(' ');

  clipPath.setAttribute('d', `${path}`);
}

const observer = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (!entry.target) {
      return;
    }

    updateClipPath(entry.target);
  }
});
observer.observe(fillElement);

updateClipPath(fillElement);

