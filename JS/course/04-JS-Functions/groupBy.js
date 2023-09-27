// Задача
/*

Реализуйте и экспортируйте по умолчанию функцию для группировки объектов по заданному свойству.
Функция принимает аргументами массив объектов и название свойства для группировки.
Она должна возвращать объект, где ключ - это значение по заданному свойству, а значение - массив с данными,
подходящими для группы.

import groupBy from './groupBy.js';

const students = [
  { name: 'Tirion', class: 'B', mark: 3 },
  { name: 'Keit', class: 'A', mark: 3 },
  { name: 'Ramsey', class: 'A', mark: 4 },
];

groupBy([], ''); // {}
groupBy(students, 'mark');
// {
//   3: [
//     { name: "Tirion", class: "B", mark: 3 },
//     { name: "Keit", class: "A", mark: 3 },
//   ],
//   4: [
//     { name: "Ramsey", class: "A", mark: 4 },
//   ],
// }

Подсказки

Аналогичная функция есть в lodash, но вам её нужно создать самостоятельно
https://lodash.com/docs/4.17.15#groupBy

Алгоритм решения задачи с помощью цикла и редьюса одинаковый.
Если вам так проще, сделайте сначала через цикл, затем перепишите через reduce

Решение этой задачи аналогично решению задачи usersByAge из теории

*/

// const getMark = (newObj, user) => {

//   if (!Object.hasOwn(newObj, user.mark)) {
//     newObj[user.mark] = [];
//   }
//   newObj[user.mark].push(user);

//   return newObj;
// };

// const result = students.reduce(getMark, {});

// console.log(result);

// ----------------- ATTEMPT-1: TWO-STEP SOLUTION --------------------
// const getGroup = (acc, item) => {
//   if (!Object.hasOwn(acc, 'group')) {
//     acc[item['group']] = [];
//   }
//   acc[item['group']].push(item);

//   return acc;
// };

// const resultGroup = students.reduce(getGroup, {});
// console.log(resultGroup);

// --------------- ATTEMPT-2: SIGNLE-STEP SOLUTION -----------------
// const getGroup = students.reduce((acc, item) => {
//   if (!Object.hasOwn(acc, item['group'])) {
//     acc[item['group']] = [];
//   }
//   acc[item['group']].push(item);

//   return acc;
// },
// {}
// );

// console.log(getGroup);

// -------------- ATTEMPT-3: FUNC SOLUTION - WORKING VERSION ----------------------

// const groupBy = (col, key) => {
//   const getGroup = col.reduce(
//     (acc, item) => {
//       if (!Object.hasOwn(acc, item[key])) {
//         acc[item[key]] = [];
//       }
//       acc[item[key]].push(item);

//       return acc;
//     },
//     {},
//   );

//   return getGroup;
// };

// -------------- ATTEMPT-4: REFACTORING ----------------------

const groupBy = (obj, key) => {
  const callback = (initAcc, item) => {
    if (!Object.hasOwn(initAcc, item[key])) {
      initAcc[item[key]] = [];
    }
    initAcc[item[key]].push(item);

    return initAcc;
  };

  return obj.reduce(callback, {});
};

const students = [
  { name: 'Tirion', group: 'B', mark: 3 },
  { name: 'Keit', group: 'A', mark: 3 },
  { name: 'Ramsey', group: 'A', mark: 4 },
];

console.log(groupBy(students, 'mark'));
// {
//   '3': [
//     { name: 'Tirion', group: 'B', mark: 3 },
//     { name: 'Keit', group: 'A', mark: 3 }
//   ],
//   '4': [ { name: 'Ramsey', group: 'A', mark: 4 } ]
// }

// =================================================

// ================== TEACHER =====================
// const groupBy = (objects, key) => objects.reduce((acc, object) => {
//   // из каждого объекта берётся значение по ключу
//   const groupName = object[key];
//   // контейнером группы выступает массив
//   // Оператор нулевого слияния возвращает пустой массив, если в аккумуляторе ничего нет
//   const group = acc[groupName] ?? [];
//   // возвращается новый объект аккумулятора
//   // старый аккумулятор деструктурируется, для текущей группы записывается новый массив с данными
//   // квадратные скобки нужны, чтобы указать имя группы в качестве ключа
//   return { ...acc, [groupName]: group.concat(object) };
// }, {});
// =================================================
