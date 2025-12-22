 import { getHoleData } from "../utils/getHoleData.js";

const fillElement = document.querySelectorAll('.clip--path');

function updateClipPath(el) {
  const width = el.clientWidth;
  const height = el.clientHeight;

  const { x, yTop, yBottom, r } = getHoleData(el);

  const path = [
    'M 0 0' ,
    `H ${width}`,
    `V ${height}`,
    'H 0',
    'Z',
    `M ${x} ${yTop}`,
    `A ${r} ${r} 0 1 0 ${x} ${yBottom}`,
    `A ${r} ${r} 0 1 0 ${x} ${yTop}`
  ].join(' ');

  el.style.clipPath = `path(evenodd, "${path}")`;
}

const observer = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (!entry.target) {
      return;
    }

    updateClipPath(entry.target);
  }
});

fillElement.forEach(el =>{
  observer.observe(el);
  updateClipPath(el);
});

