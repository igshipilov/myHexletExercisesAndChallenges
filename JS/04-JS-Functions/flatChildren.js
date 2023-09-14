// Задача
/*

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список пользователей
и возвращает плоский список их детей. Дети каждого пользователя хранятся в виде массива в ключе children.

import getChildren from './users.js';

const users = [
  {
    name: 'Tirion',
    children: [
      { name: 'Mira', birthday: '1983-03-23' },
    ],
  },
  { name: 'Bronn', children: [] },
  {
    name: 'Sam',
    children: [
      { name: 'Aria', birthday: '2012-11-03' },
      { name: 'Keit', birthday: '1933-05-14' },
    ],
  },
  {
    name: 'Rob',
    children: [
      { name: 'Tisha', birthday: '2012-11-03' },
    ],
  },
];

getChildren(users);
// [
//   { name: 'Mira', birthday: '1983-03-23' },
//   { name: 'Aria', birthday: '2012-11-03' },
//   { name: 'Keit', birthday: '1933-05-14' },
//   { name: 'Tisha', birthday: '2012-11-03' },
// ];
Другие примеры смотрите в модуле с тестами.

Подсказки

flat
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
*/

// ============= MY =====================

// const getChildren = (data) => {
//   const result = data.map((element) => element.children);
//   return result.flat()
// };
// ======================================

// ============= TEACHER =====================

const getChildren = (users) => {
  const getChildrenOfUser = users.map(({ children }) => children);
  return getChildrenOfUser.flat();
};

// ===========================================

const users = [
  {
    name: 'Tirion',
    children: [
      { name: 'Mira', birthday: '1983-03-23' },
    ],
  },
  { name: 'Bronn', children: [] },
  {
    name: 'Sam',
    children: [
      { name: 'Aria', birthday: '2012-11-03' },
      { name: 'Keit', birthday: '1933-05-14' },
    ],
  },
  {
    name: 'Rob',
    children: [
      { name: 'Tisha', birthday: '2012-11-03' },
    ],
  },
];

console.log(getChildren(users));
// [
//   { name: 'Mira', birthday: '1983-03-23' },
//   { name: 'Aria', birthday: '2012-11-03' },
//   { name: 'Keit', birthday: '1933-05-14' },
//   { name: 'Tisha', birthday: '2012-11-03' },
// ];
