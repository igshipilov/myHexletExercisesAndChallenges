// Задача
/*

Иногда в программировании возникает задача поиска разницы между двумя наборами данных, такими как объекты.
Например, при поиске различий в json файлах. Для этого даже существуют специальные сервисы, например,
http://www.jsondiff.com/ (попробуйте нажать на ссылку sample data и затем кнопку Compare).

solution.js
Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает два объекта и возвращает результат сравнения в виде объекта.
Ключами результирующего объекта будут все ключи из двух входящих объектов, а значением строка с описанием отличий:
added, deleted, changed или unchanged.

Возможные значения:

added — ключ отсутствовал в первом объекте, но был добавлен во второй
deleted — ключ был в первом объекте, но отсутствует во втором
changed — ключ присутствовал и в первом и во втором объектах, но значения отличаются
unchanged — ключ присутствовал и в первом и во втором объектах с одинаковыми значениями
import genDiff from './diffGenerator.js';

genDiff(
  { one: 'eon', two: 'two', four: true },
  { two: 'own', zero: 4, four: true },
);
// {
//   one: 'deleted',
//   two: 'changed',
//   four: 'unchanged',
//   zero: 'added',
// }
Подсказки
Фрагмент этой задачи разбирается в докладе "Ментальное программирование"

*/

/*

# Логика

Функция получает два объекта.

Последовательно сравнивает ключи и их значения (вытаскиваем с помощью Object.entries())
  если значение ключа — это объект, то рекурсия
  иначе вернуть один из четырёх возможных результатов:

  deleted
  changed
  unchanged
  added

Возвращает новый объект.

*/

import _ from 'lodash';

// =============== MY 1 ====================
// const genDiff = (obj1, obj2) => {
//   const comparison = {};

//   const entries1 = Object.entries(obj1);
//   const entries2 = Object.entries(obj2);

//   for (const [key1] of entries1) {
//     if (!Object.hasOwn(obj2, key1)) {
//       comparison[key1] = 'deleted';
//     }
//   }

//   for (const [key2, value2] of entries2) {
//     if (!Object.hasOwn(obj1, key2)) {
//       comparison[key2] = 'added';
//     } else if (_.isPlainObject(obj1[key2]) && _.isPlainObject(value2)) {
//       comparison[key2] = genDiff(obj1[key2], value2);
//     } else if (obj1[key2] === value2) {
//         comparison[key2] = 'unchanged';
//       } else {
//         comparison[key2] = 'changed';
//       }
//   }

//   return comparison;
// };
// ======================================

// =============== MY 2 ====================
const genDiff = (obj1, obj2) => {
  const comparison = {};

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = _.union(keys1, keys2);

  for (const key of keys) {
    if (!Object.hasOwn(obj2, key)) {
      comparison[key] = 'deleted';
    } else if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
      comparison[key] = genDiff(obj1[key], obj2[key]);
    } else if (!Object.hasOwn(obj1, key)) {
      comparison[key] = 'added';
    } else if (obj1[key] !== obj2[key]) {
      comparison[key] = 'changed';
    } else if (obj1[key] === obj2[key]) {
      comparison[key] = 'unchanged';
    }
  }

  return comparison;
};
// ======================================

// =============== TEACHER ====================
// const genDiff = (data1, data2) => {
//   const keys1 = Object.keys(data1);
//   const keys2 = Object.keys(data2);
//   const keys = _.union(keys1, keys2);

//   const result = {};
//   for (const key of keys) {
//     if (!Object.hasOwn(data2, key)) {
//       result[key] = 'deleted';
//     } else if (!Object.hasOwn(data1, key)) {
//       result[key] = 'added';
//     } else if (data1[key] !== data2[key]) {
//       result[key] = 'changed';
//     } else {
//       result[key] = 'unchanged';
//     }
//   }

//   return result;
// };
// ============================================

// const obj1 = { one: 'eon', two: 'two', four: true };
// const obj2 = { two: 'own', zero: 4, four: true };

const obj1 = {
  one: 'eon',
  two: 'two',
  four: true,
  five: {
    test: 'check', sec: 'another', fourth: { deep: 'deepVale' }, iAmObj: { obj: 'yes' },
  },
};
const obj2 = {
  two: 'own', zero: 4, four: true, five: { test: 'check', sec: 'diff', fourth: { an: '42' } }, iAmObj: 'no',
};

console.log(genDiff(obj1, obj2));
// {
//   one: 'deleted',
//   two: 'changed',
//   four: 'unchanged',
//   zero: 'added',
// }
