import { getHoleData } from "../utils/getHoleData.js";

const fillElement = document.querySelector('.scale__fill--svg-mask');

function updateMask(el) {
  const svg = document.querySelector('.svg');
  const circle = svg.querySelector('.maskCircle');

  const width = el.clientWidth;
  const height = el.clientHeight;

  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

  const { x: cx } = getHoleData(el);

  circle.setAttribute('cx', cx);
}

const observer = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (!entry.target) {
      return;
    }

    updateMask(entry.target);
  }
});
observer.observe(fillElement);

updateMask(fillElement);
