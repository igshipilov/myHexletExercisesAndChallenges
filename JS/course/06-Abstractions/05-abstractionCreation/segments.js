/*
https://ru.hexlet.io/courses/js-data-abstraction/lessons/abstractions/exercise_unit

Отрезок — еще один графический примитив. В коде описывается парой точек, одна из которых — начало отрезка, другая — конец.
Обычный отрезок не имеет направления, поэтому вы сами вольны выбирать то, какую точку считать началом, а какую концом.

В этом задании вам нужно самостоятельно создать абстракции и принять решение о том, как они будет реализованы.
Напомню, что сделать это можно разными способами и нет одного правильного.

segments.js
Реализуйте и экспортируйте указанные ниже функции:

makeSegment(). Принимает на вход две точки и возвращает отрезок.
getMidpointOfSegment(). Принимает на вход отрезок и возвращает точку находящуюся на середине отрезка.
getBeginPoint(). Принимает на вход отрезок и возвращает точку начала отрезка.
getEndPoint(). Принимает на вход отрезок и возвращает точку конца отрезка.

Пример

const beginPoint = makeDecartPoint(3, 2);
const endPoint = makeDecartPoint(0, 0);
segment = makeSegment(beginPoint, endPoint);

getMidpointOfSegment(segment); // (1.5, 1)
getBeginPoint(segment); // (3, 2)
getEndPoint(segment); // (0, 0)

*/

//  ========= TEACHER ======================
import { makeDecartPoint, getX, getY } from './points.js';

const makeSegment = (point1, point2) => {
  const segment = { beginPoint: point1, endPoint: point2 };

  return segment;
};

const getBeginPoint = (segment) => segment.beginPoint;

const getEndPoint = (segment) => segment.endPoint;

const getMidpointOfSegment = (segment) => {
  const beginPoint = getBeginPoint(segment);
  const endPoint = getEndPoint(segment);

  const x = (getX(beginPoint) + getX(endPoint)) / 2;
  const y = (getY(beginPoint) + getY(endPoint)) / 2;

  return makeDecartPoint(x, y);
};

// getX(point1); // point1.x
// // но если `point1` – это массив, а не объект, тогда вернётся ошибка

export {
  makeSegment,
  getMidpointOfSegment,
  getBeginPoint,
  getEndPoint,
};
