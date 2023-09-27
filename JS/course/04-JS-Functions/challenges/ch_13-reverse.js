// Задача
/*

Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает строку задом наперед, используя рекурсию.

Например:

import reverse from './reverse';

reverse('str');    // rts
reverse('hexlet'); // telxeh
Попробуйте решить эту задачу, используя рекурсивный процесс. Для этого вам понадобится метод slice().

Подсказки

Чтобы узнать длину строки, используйте свойство length:

'welcome'.length; // 7
Чтобы получить подстроку из строки, используйте метод slice():

'welcome'.slice(1, 4); // 'elc';

*/

/*

# Алгоритм
Базовый случай: str.length === 1, return str

return reverse(str.slice(1))

*/

// ============= MY =====================

// ----------- LOOP -----------
// const reverse = (str) => {
//   let result = '';
//   for (let i = 0; i < str.length; i += 1) {
//     const current = str[i];
//     result = `${current}${result}`;
//   }

//   return result;
// };

// ----------- LOOP with slice() -----------
// const reverse = (str) => {
//   let result = '';
//   for (let i = 0; i < str.length; i += 1) {
//     const current = str.slice(i, i + 1);
//     result = `${current}${result}`;
//   }

//   return result;
// };

// ----------- RECURSION -----------
// const reverse = (str) => {
//   if (str.length < 2) {
//     return str;
//   }
//   const iter = (counter, acc) => {
//     if (acc.length < 2) {
//       return acc;
//     }
//     const current = acc.slice(0, 1);
//     return `${iter(counter + 1, str.slice(counter))}${current}`;
//   }

//   return iter(1, str);
// };

// ======================================

// ============= TEACHER =====================
const reverse = (str) => {
  if (str.length < 2) {
    return str;
  }

  return `${str.slice(-1)}${reverse(str.slice(0, -1))}`;
};

// ===========================================

console.log(reverse('str')); // rts
console.log(reverse('hexlet')); // telxeh
