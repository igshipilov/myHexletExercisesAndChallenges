import _ from 'lodash';
// Задача
/*

Реализуйте и экспортируйте по умолчанию функцию, которая принимает список пользователей и возвращает объект,
где ключ - это год рождения, а значение - это количество мужчин, родившихся в этот год.

Примеры

const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
  { name: 'Jon', gender: 'male', birthday: '1980-11-03' },
  { name: 'Robb', gender: 'male', birthday: '1980-05-14' },
  { name: 'Tisha', gender: 'female', birthday: '2012-11-03' },
  { name: 'Rick', gender: 'male', birthday: '2012-11-03' },
  { name: 'Joffrey', gender: 'male', birthday: '1999-11-03' },
  { name: 'Edd', gender: 'male', birthday: '1973-11-03' },
];

getMenCountByYear(users);
// {
//   1973: 3,
//   1963: 1,
//   1980: 2,
//   2012: 1,
//   1999: 1,
// };

Подсказки

Для извлечения года из даты используйте метод slice
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

*/

/*

# Алгоритм
С помощью `.filter(({ gender }) => gender === 'male')` фильтруем, оставляя только мужчин

С помощью `.map()` создаём новый массив, наполненный только слайснутыми значениями `.slice(0, 4)` ключа birthday,
получая только год

С помощью `.reduce()` создаём новый объект, наполненный ключами:
  их имена – это элементы массива
  их значения – это счётчик, обозначающий количество таких же элементов

Как наполнить новый объект?
Создаём переменную `count`, логика работы которой:
  если ключ с именем [элемент-массива] отсутствует в `acc`, тогда acc[el] = 1
  иначе acc[el] += 1

Возвращаем объект:
return { ...acc, acc[el] = count }

*/

// ============= MY =====================

// const getMenCountByYear = (object) => (
//   object
//     .filter(({ gender }) => gender === 'male')
//     .map(({ birthday }) => birthday.slice(0, 4))
//     .reduce(
//       (acc, el) => {
//         const count = _.get(acc, el, 0) + 1; return { ...acc, [el]: count };
//       },
//       {},
//     )
// );

// ======================================

// ============= TEACHER =====================

const getMenCountByYear = (users) => {
  const men = users.filter(({ gender }) => gender === 'male');

  const years = men.map(({ birthday }) => birthday.slice(0, 4));

  return years.reduce((acc, year) => {
    const count = _.get(acc, year, 0) + 1;
    return { ...acc, [year]: count };
  }, {});
};

// ===========================================

// const test = '1973-03-23';
// console.log(test.slice(0, 4));

const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
  { name: 'Jon', gender: 'male', birthday: '1980-11-03' },
  { name: 'Robb', gender: 'male', birthday: '1980-05-14' },
  { name: 'Tisha', gender: 'female', birthday: '2012-11-03' },
  { name: 'Rick', gender: 'male', birthday: '2012-11-03' },
  { name: 'Joffrey', gender: 'male', birthday: '1999-11-03' },
  { name: 'Edd', gender: 'male', birthday: '1973-11-03' },
];

console.log(getMenCountByYear(users));
// {
//   1973: 3,
//   1963: 1,
//   1980: 2,
//   2012: 1,
//   1999: 1,
// };
