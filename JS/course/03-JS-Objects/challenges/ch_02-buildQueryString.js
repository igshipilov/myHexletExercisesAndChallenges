// Задача
/*

Query String (строка запроса) - часть адреса страницы в интернете, содержащая константы и их значения.
Она начинается после вопросительного знака и идет до конца адреса. Пример:

# query string: page=5
https://ru.hexlet.io/blog?page=5
Если параметров несколько, то они отделяются амперсандом &:

# query string: page=5&per=10
https://ru.hexlet.io/blog?per=10&page=5
buildQueryString.js
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход список параметров
и возвращает сформированный query string из этих параметров:

import bqs from '../buildQueryString.js';

bqs({ per: 10, page: 1 });
// page=1&per=10

bqs({ param: 'all', param1: true });
// param=all&param1=true

Имена параметров в выходной строке должны располагаться в алфавитном порядке
то есть их нужно отсортировать).

*/

// =============== MY ====================

// const bqs = (table) => {
//   const entries = Object.entries(table);
//   const entriesSorted = entries.sort();

//   let result = '';
//   for (let i = 0; i < entriesSorted.length; i += 1) {
//     const [key, value] = entriesSorted[i];
//     const tail = `${result}${key}=${value}`;

//     result = entriesSorted[i + 1] ? `${tail}&` : `${tail}`;
//   }

//   return result;
// };

// =======================================

// =============== TEACHER ====================
const bqs = (params) => {
  const keys = Object.keys(params).sort();

  const queryString = [];
  for (const key of keys) {
    queryString.push(`${key}=${params[key]}`);
  }

  return queryString.join('&');
};
// ============================================

console.log(bqs({ per: 10, page: 1 })); // page=1&per=10
console.log(bqs({ param: 'all', param1: true })); // param=all&param1=true
