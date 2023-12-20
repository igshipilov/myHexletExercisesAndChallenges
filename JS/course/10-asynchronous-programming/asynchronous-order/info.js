// @ts-check
/* eslint-disable import/prefer-default-export */

/*

https://ru.hexlet.io/courses/js-asynchronous-programming/lessons/asynchronous-flow/exercise_unit

Реализуйте и экспортируйте асинхронную функцию compareFileSizes(),
которая сравнивает размеры двух файлов и передает результат сравнения в переданную callback-функцию.
Если первый файл больше второго, то она передает единицу, если размеры равны, то ноль, иначе — -1.

import { compareFileSizes } from './info.js';

compareFileSizes('filepath1', 'filepath2', (_err, result) => console.log(result));

Подсказка
Для реализации этого задания, нужно воспользоваться функцией fs.stat, которая использовалась в примерах теории
https://nodejs.org/api/fs.html#fsstatpath-options-callback

Math.sign
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/sign

*/

import fs from 'fs';

// BEGIN (write your solution here)
export const compareFileSizes = (filepath1, filepath2, cb) => {
  fs.stat(filepath1, (_err1, stats1) => {
    fs.stat(filepath2, (_err2, stats2) => {
      const fileSize1 = stats1.size;
      const fileSize2 = stats2.size;
      const comparedResult = (result) => {
        cb(null, result);
      };
      comparedResult(Math.sign(fileSize1 - fileSize2));
    });
  });
};
// END

// ============= TEACHER =====================
// export const compareFileSizes = (filepath1, filepath2, cb) => {
//   fs.stat(filepath1, (_err1, { size: size1 }) => {
//     fs.stat(filepath2, (_err2, { size: size2 }) => {
//       cb(null, Math.sign(size1 - size2));
//     });
//   });
// };
// ===========================================
