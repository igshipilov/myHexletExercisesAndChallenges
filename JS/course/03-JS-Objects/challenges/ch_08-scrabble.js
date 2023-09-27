import _ from 'lodash';

// Задача
/*

Реализуйте и экспортируйте по умолчанию функцию-предикат, которая принимает на вход два параметра:
набор символов в нижнем регистре (строку) и слово, и проверяет, можно ли из переданного набора составить это слово.
В результате вызова функция возвращает true или false.

При проверке учитывается количество символов, нужных для составления слова, и не учитывается их регистр.

Примеры
scrabble('rkqodlw', 'world'); // true
scrabble('avj', 'java'); // false
scrabble('avjafff', 'java'); // true
scrabble('', 'hexlet'); // false
scrabble('scriptingjava', 'JavaScript'); // true

*/

/*

# Логика

Сравнить количество совпадающих символов в аргументах characters и word
  - для обоих аргументов составить по объекту, где символ это ключ, а число (количество) это значение ключа
  - вынести в массив имена ключей второго аргумента (word)
  - for..of пройтись по этому этому массиву, сравнивая значения из объекта word и объекта characters
      if(word[char] > characters[char]) {
        return false
      }

Если количество какого-либо из символов в word больше, чем в characters, то return false,
иначе return true

*/

// ============= MY 1 =====================
// const scrabble = (characters, word) => {
//   const lowerChars = characters.toLowerCase();
//   const lowerWord = word.toLowerCase();

//   const countChars = {};
//   const countWordLetters = {};

//   for (const char of lowerChars) {
//     countChars[char] = (countChars[char] ?? 0) + 1;
//   }

//   for (const char of lowerWord) {
//     countWordLetters[char] = (countWordLetters[char] ?? 0) + 1;
//   }

//   for (const key of lowerWord) {
//     if (!lowerChars.includes(key)) {
//       return false;
//     }
//     if (countWordLetters[key] > countChars[key]) {
//       return false;
//     }
//   }

//   return true;
// };

// export default scrabble;
// ===========================================

// ============= MY-TEACHER-(no-lodash) =====================

const countByChars = (str) => {
  const result = {};

  for (const char of str) {
    result[char] = (result[char] ?? 0) + 1;
  }

  return result;
};

const scrabble = (characters, word) => {
  const lowerChars = characters.toLowerCase();
  const lowerWord = word.toLowerCase();

  const charsCounted = countByChars(lowerChars);

  for (const char of lowerWord) {
    if (charsCounted[char] === 0 || charsCounted[char] === undefined) {
      return false;
    }
    charsCounted[char] -= 1;
  }

  return true;
};
// ===========================================

// ========== DOESN'T WORK ==================
// const scrabble = (characters, word) => {
//   let tempChars = characters;

//   for (const char of word) {
//     if (!tempChars.includes(char)) {
//       return false;
//     }
//   }
//   return true;
// };
// =========================================

// ========== DOESN'T WORK ==================
// const scrabble = (characters, word) => {

//   let stack = word.length;

//   for (const char of characters) {
//     if (word.includes(char)) {
//       stack -= 1;
//     }
//   }

//   if (stack > 0) {
//     return false;
//   }

//   return true;
// };
// =========================================

// const scrabble = (characters, word) => {
//   const lowerChars = characters.toLowerCase();
//   const lowerWord = word.toLowerCase();

// };

// console.log(scrabble('aacb', 'bav'));

console.log(scrabble('rkqodlw', 'world')); // true
console.log(scrabble('avj', 'java')); // false
console.log(scrabble('avjafff', 'java')); // true
console.log(scrabble('', 'hexlet')); // false
console.log(scrabble('scriptingjava', 'JavaScript')); // true
