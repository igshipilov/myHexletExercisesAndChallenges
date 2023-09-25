// @ts-check
// eslint-disable-next-line
import { makeDecartPoint, getX, getY, getQuadrant } from './points.js';


// ======== TEACHER ==================
// BEGIN (write your solution here)
const makeRectangle = (point, width, height) => ({ point, width, height });

const getStartPoint = (rectangle) => rectangle.point;
const getWidth = (rectangle) => rectangle.width;
const getHeight = (rectangle) => rectangle.height;

const containsOrigin = (rectangle) => {
  const p1 = getStartPoint(rectangle);
  const p4 = makeDecartPoint(
    getX(p1) + getWidth(rectangle),
    getY(p1) - getHeight(rectangle)
  );

  return getQuadrant(p1) === 2 && getQuadrant(p4) === 4;
};

export {
  makeRectangle,
  containsOrigin,
  getStartPoint,
  getWidth,
  getHeight,
};
// END