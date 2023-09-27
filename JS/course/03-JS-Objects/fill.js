/*

Функция получает объект1, массив и объект2
Возвращает объект1, ключи которого перезаписаны ключами из объекта2, перечисленными в массиве-аргументе
Если подаётся пустой массив, тогда объект2 целиком вливается в объект1

1. С помощью _.pick() создаём из объекта2 новый объект, в котором будут только ключи, перечисленные в массиве-аргументе
2. Object.assign(объект1, объект2New)
3. Если массив.length === 0, тогда Object.assign(объект1, объект2)

*/

import _ from 'lodash';

const company = {
  name: null,
  state: 'moderating',
};

const data = {
  name: 'Hexlet',
  state: 'published',
  test: 'some text',
};

// const fill = (obj1, keys, obj2) => {
//   const obj2keyed = _.pick(obj2, keys);
//   console.log(obj2keyed);
//   console.log(keys.length);

//   if (keys.length === 0) {
//     return Object.assign(obj1, obj2);
//   }
//   return Object.assign(obj1, obj2keyed);
// };

// =============== TEACHER ====================
const fill = (object, keys, data) => {
  const filteredData = keys.length > 0 ? _.pick(data, keys) : data;
  return Object.assign(object, filteredData);
};

// ============================================

console.log(fill(company, ['name'], data));
console.log(fill(company, [], data));
