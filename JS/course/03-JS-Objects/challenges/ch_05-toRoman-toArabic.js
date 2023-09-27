// Задача
/*

Для записи цифр римляне использовали буквы латинского алфавита: I, V, X, L, C, D, M. Например:

1 обозначалась с помощью буквы I
10 с помощью Х
7 с помощью VII
Число 2020 в римской записи — это MMXX (2000 = MM, 20 = XX).

solution.js
Реализуйте и экспортируйте функцию toRoman(), которая переводит арабские числа в римские.
Функция принимает на вход целое число в диапазоне от 1 до 3000, а возвращает строку с римским представлением этого числа.

Реализуйте и экспортируйте функцию toArabic(), которая переводит число в римской записи в число, записанное арабскими цифрами.
Если переданное римское число не корректно, то функция должна вернуть значение false.

Примеры
toRoman(1);
// 'I'
toRoman(59);
// 'LIX'
toRoman(3000);
// 'MMM'

toArabic('I');
// 1
toArabic('LIX');
// 59
toArabic('MMM');
// 3000

toArabic('IIII');
// false
toArabic('VX');
// false

Подсказки
Подробнее о римской записи — https://ru.wikipedia.org/wiki/Римские_цифры

*/

/*

# Все правила вычитания

IV = 4
IX = 9
XL = 40
XC = 90
CD = 400
CM = 900

# Логика

Для подстановки одинаковых значений можно использовать метод .repeat()
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

Во время просмотра римских цифр:
Если следующее число больше текущего, то есть [i + 1] > [i], тогда [i + 1] - [i]

Если в арабском числе:
  после цифры идёт 0 или текущая цифра 9, то записываем соответствующую римскую цифру из arabToRomanData()

Отдельно превращаем:
  - единицы
  - десятки
  - сотни
  - тысячи

То есть функция должна:
  - вычленять из арабского числа порядок
  - менять этот порядок в соответствии с его характерными правилами

Я думаю, нужно по отдельной функции для каждого порядка.

Если длина = 2, а первое число < 5, то первое число = X

Если длина = 3, а первое число < 4, то первое число = C
Если длина = 3, а первое число = 4, то первое число = CD

Если длина = 3, а первое число = 5, то первое число = D

*/

// ========================= INITIAL ARRAYS =================================
// const arab = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
// const roman = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];

// const arabToRomanData = () => {
//   const result = {};
//   for (let i = 0; i < arab.length; i += 1) {
//     const key = arab[i];
//     result[key] = roman[i];
//   }

//   return result;
// };
// console.log(arabToRomanData())

// const arabToRoman = arabToRomanData();
// ==========================================================================

// ================= MY ==========================

// ===================== Arab to Roman ============================

// const arabToRoman = {
//   //
//   1: 'I',
//   4: 'IV',
//   5: 'V',
//   9: 'IX',
//   10: 'X',
//   40: 'XL',
//   50: 'L',
//   90: 'XC',
//   100: 'C',
//   400: 'CD',
//   500: 'D',
//   900: 'CM',
//   1000: 'M'
// };

// const getUnitsTensHundredsA = (num, exp) => {
//   const numToRepeat = Number(num);

//   if (numToRepeat > 3000) {
//     return false;
//   }

//   const begin = arabToRoman[exp];
//   const mid = exp * 5;
//   const numCorrected = Number(num) * exp;

//   const beforeMidlow = exp;
//   const beforeMidhigh = exp * 4;
//   const afterMidlow = exp * 5;
//   const afterMidhigh = exp * 9;

//   let result = '';
//   if (Object.hasOwn(arabToRoman, numCorrected)) {
//     return arabToRoman[numCorrected];

//   } else if (numCorrected > beforeMidlow && numCorrected < beforeMidhigh) {
//     result = begin.repeat(numToRepeat);
//   } else if (numCorrected > afterMidlow && numCorrected < afterMidhigh) {
//     result = `${arabToRoman[mid]}${begin.repeat(numToRepeat - 5)}`;
//   }

//   return result;
// };

// const toRoman = (num) => {
//   const numString = num.toString();
//   const len = numString.length - 1;

//   let result = '';
//   for (let i = len, e = 1; i >= 0; i -= 1, e *= 10) {
//     result = `${getUnitsTensHundredsA(numString[i], e)}${result}`;
//   }

//   return result;
// };

// console.log(toRoman(9));
// // 'IX'

// console.log(toRoman(1));
// // 'I'
// console.log(toRoman(59));
// // 'LIX'

// console.log(toRoman(2020));
// // MMXX

// console.log(toRoman(3000));
// // 'MMM'

// console.log(toRoman());

// ===================== Roman to Arab ============================

// const romanToArab = {
//   'I': 1,
//   'IV': 4,
//   'V': 5,
//   'IX': 9,
//   'X': 10,
//   'XL': 40,
//   'L': 50,
//   'XC': 90,
//   'C': 100,
//   'CD': 400,
//   'D': 500,
//   'CM': 900,
//   'M': 1000
// };

// const toArabic = (num) => {
//   if (num[3] === num[0]) {
//     return false;
//   }
//   if (num.includes('VX') || num.includes('LC') || num.includes('LD') || num.includes('LM')) {
//     return false;
//   }

//   let result = 0;

//   if (Object.hasOwn(romanToArab, num)) {
//     return result = romanToArab[num];
//   }

//   const finElement = num.length - 1;
//     for (let i = finElement; i >= 0; i -= 1) {
//       const current = num[i];
//       const prev = num[i - 1];

//       if (romanToArab[current] > romanToArab[prev] && !isNaN(romanToArab[prev])) {
//         const pair = `${prev}${current}`;
//         result += romanToArab[pair];
//         i -= 1;
//       } else {
//       result += romanToArab[current];
//       }

//     }

//   return result;
// };

// console.log('test Similar ("II"): ' + toArabic('II'));
// console.log('test Similar ("III"): ' + toArabic('III') + '\n');

// console.log('test Similar ("XX"): ' + toArabic('XX'));
// console.log('test Similar ("XXX"): ' + toArabic('XXX') + '\n');

// console.log('test Similar ("CC"): ' + toArabic('CC'));
// console.log('test Similar ("CCC"): ' + toArabic('CCC') + '\n');

// console.log(toArabic('VI')) // 6
// console.log(toArabic('XLVIII')) // 48

// console.log('test Similar ("XCIII"): ' + toArabic('XCIII') + ' ? 93') // 93
// console.log('test Similar ("CXLI"): ' + toArabic('CXLI') + ' ? 141') // 141
// console.log('test Similar ("CDII"): ' + toArabic('CDII') + ' ? 402') // 402
// console.log('test Similar ("DLXXV"): ' + toArabic('DLXXV') + ' ? 575') // 575
// console.log('test Similar ("CMXI"): ' + toArabic('CMXI') + ' ? 911') // 911

// console.log(toArabic('I'));
// // 1

// console.log(toArabic('XXIII'));
// // 23

// console.log(toArabic('LIX'));
// // 59
// console.log(toArabic('MMM'));
// // 3000

// console.log(toArabic('IIII'));
// // false
// console.log(toArabic('VX'));
// // false

// ===============================================

// ================= TEACHER =====================
const numerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

// Здесь мы сортируем с помощью метода .sort() и функции-компаратора. Подробнее:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#примеры
const sortedNumerals = Object.entries(numerals)
  .sort(([, arabic1], [, arabic2]) => Math.sign(arabic2 - arabic1));

export const toRoman = (number) => {
  // Хранит в себе текущее арабское число, которое мы должны конвертировать в римское
  let digit = number;

  const result = [];

  // цикл for..of на каждой итерации берёт из массива sortedNumerals текущий подмассив:
  // на первом круге берёт [ 'M', 1000 ], на втором круге [ 'CM', 900 ] и т.д.
  // А деструктуризация [roman, arabic] применяется к текущему извлечённому подмассиву,
  // поэтому получается так:
  // const roman = M; const arabic = 1000;
  // const roman = CM; const arabic = 900; и т.д.
  for (const [roman, arabic] of sortedNumerals) {
    // repetitionsCount определяет, сколько раз запушить текущее римское число.
    // repetitionsCount будет возвращать 0 каждый раз, когда arabic выше текущего digit
    // в остальных случаях вернётся целое число: 1 или выше
    const repetitionsCount = Math.floor(digit / arabic);

    // если repetitionsCount === 0, то текущее число не меняем
    // если repetitionsCount >= 1, то такое количество раз пушим в массив текущее итерируемое римское число,
    // а само текущее итерируемое число корректируем: вычитаем из него «отработанное» арабское
    // (т.к. оно уже использовано – римское записано)
    digit -= repetitionsCount * arabic;
    result.push(roman.repeat(repetitionsCount));
  }

  return result.join('');
};

export const toArabic = (romanNumber) => {
  let result = 0;
  let currentLine = romanNumber;
  for (const [roman, arabic] of sortedNumerals) {
    while (currentLine.indexOf(roman) === 0) {
      result += arabic;
      currentLine = currentLine.slice(roman.length);
    }
  }

  if (toRoman(result) !== romanNumber) {
    return false;
  }

  return result;
};

// ================= MY TEACHER =====================
// export const toRoman = (number) => {
//   let digit = number;

//   let result = [];
//   for (const [roman, arabic] of sortedNumerals) {
//     const repetitionsCount = Math.floor(digit/arabic);
//     digit -= repetitionsCount * arabic;
//     result.push(roman.repeat(repetitionsCount));
//   }

//   return result.join('');
// };
// ==================================================

// -------- toRoman -----------
// console.log(toRoman(23));
// // XXIII

// console.log(toRoman(9));
// // 'IX'

// console.log(toRoman(1));
// // 'I'
// console.log(toRoman(59));
// // 'LIX'

// console.log(toRoman(2020));
// // MMXX

// console.log(toRoman(3000));
// // 'MMM'

// console.log(toRoman());

// // -------- toArabic -----------
// console.log(toArabic('I'));
// // 1

console.log(toArabic('XXIII'));
// 23

// console.log(toArabic('LIX'));
// // 59
// console.log(toArabic('MMM'));
// // 3000

// console.log(toArabic('IIII'));
// // false
// console.log(toArabic('VX'));
// // false
// ===============================================
