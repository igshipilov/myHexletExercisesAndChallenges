// import jest from 'jest';
import fakerator from 'fakerator';
import _ from 'lodash';

// ВНИМАНИЕ
// Я не настроил `rollDie`

// Задача
/*
https://ru.hexlet.io/challenges/js_functions_horisontal_histogram_exercise

Игральная кость - шестигранный кубик, который бросается несколько раз.
Гистограмма - это графическое представление данных в виде столбцов или колонок.

histogram.js
Реализуйте и экспортируйте по умолчанию функцию, которая выводит на экран горизонтальную гистограмму.
Функция принимает на вход количество бросков кубика и функцию, которая имитирует бросок игральной кости (её реализовывать не нужно).
Вызов этой функции генерирует значение от 1 до 6, что соответствует одной из граней игральной кости.

Гистограмма содержит строки, каждой из которых соответствует грань игральной кости и количество выпадений этой грани.
Результаты отображаются графически (с помощью символов #) и в виде числового значения, за исключением случаев,
когда количество равно 0 (нулю).

Примеры

import play from '../histogram.js';

play(100, rollDie);
// => 1|####################### 23
//    2|################## 18
//    3|############# 13
//    4|#################### 20
//    5|############ 12
//    6|############## 14

play(13, rollDie);
// => 1|
//    2|## 2
//    3|# 1
//    4|## 2
//    5|#### 4
//    6|#### 4

Подсказки:

Гистограмма
https://ru.wikipedia.org/wiki/Гистограмма

Для решения задачи используйте функции из библиотеки lodash
https://lodash.com/docs/4.17.15

*/

/*

# Алгоритм

На выходе получаем массив строк, где каждая строка, это:
  - сторона игральной кости (от 1 до 6)
  - количество бросков в виде:
    -- знака '#'
    -- числа (через пробел от знака '#')

Функция play принимает в себя:
  - количество бросков
  - callback-функцию, генерирующую броски
play(roundsCount, rollDice);

-------- Мне нужно ---------

- Изначальный массив, наполненный названиями строк,
названия типа: '1|', '2|' и т.д.

- dataArr, содержащий количество вхождений каждой цифры (которые от 1 до 6). Так я получу:
    - колиечство решёток '#'
    - сумму решёток по каждой строке

---------------------------

Затем я:

- сортирую dataArr так, чтобы количество каждого вхождения было выстроено
по порядку следования цифр, например:
  -- если единица выпадала 50 раз, двойка выпадала 13 раз, тройка N раз и т.д,
  то массив наполняется так: 50, 13, N, ...

- Получаю два массива с одинаковым количеством элементов,
теперь оба массива надо соединить так, чтобы элементы встали на соответствующие места:
  -- чтобы элементу '1|' соответствовал элемент 50
  -- чтобы элементу '2|' соответствовал элемент 13
  -- чтобы элементу '3|' соответствовал элемент N
  -- ...
На выходе массив с подмассивами типа [[key, value]]

- Итерирую этот главный массив:
  -- использую key в качестве начала подмассива
  -- использую value для repeat '#', а также для числа после решёток

Может помочь `_.zip()`

  var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
  // => [['a', 1, true], ['b', 2, false]]

Наполняем массив результатами всех бросков:
dataArray = [rollDice1, rollDice2, ..., rollDiceN]

Создаём массив из подмассивов: в каждом подмассиве будут одни и те же числа:
]
  [1, 1, 1, 1]
  [2, 2, 2]
  ...
  [6, 6, 6, 6, 6,]
]

Сортируем подмассивы по возрастанию

`.map()`
Мэпим родительский массив, меняя каждый его элемент (каждый подмассив) на длину элемента:
получаем массив с числами, обозначающими 'количество вхождений каждого числа от 1 до 6 за N бросков'

Создаём массив с номерами граней:
initArr =
[
  '1|',
  '2|',
  '3|',
  '4|',
  '5|',
  '6|'
]

Мэпим на `initArr` -->
  `${el}`

`arr.reduce()` -->
  count + 1
  result = arr[rollDice - 1].push('#')
  return `${result} ${count}`

*/

// ----------- НЕ УДАЛОСЬ скопипастить генератор рандома -----------
// const getRandomFn = (seed) => {
//   fakerator().seed(seed);
//   return () => fakerator().random.number(1, 6);
// };

// console.log(getRandomFn(12));

// // const roundsCount = 125;
// // const rollDie = getRandomFn(roundsCount);

// // console.log(rollDie)
// -----------------------------------------------------------------

// ============= MY =====================

// const initArr = [
//   '1|',
//   '2|',
//   '3|',
//   '4|',
//   '5|',
//   '6|',
// ];

// Имитирую функцию броска
const tRollDice = () => Math.round(Math.random() * (6 - 1) + 1);

// const getAllRolls = (roundsCount, rollDice, acc) => {
//   // while roundsCount > 0 --> tRollDice(6, 1)
//   if (roundsCount === 0) {
//     return acc;
//   }
//   acc.push(rollDice());
//   return getAllRolls(roundsCount - 1, rollDice, acc);
// };
// // console.log(getAllRolls(10, tRollDice, []))

// const getProgressLine = (arr) => {
//   const symb = '#';
//   return arr.map((el) => (!el ? '' : `${symb.repeat(el)} ${el}`));
// };

// // const testAllRolls = [
// //   1, 2, 2, 3, 3, 3, 3,
// //   4, 4, 4, 4, 4, 4, 5,
// //   5, 5, 5, 6, 6, 6, 6
// // ];
// // console.log(getProgressLine(testAllRolls))

// const play = (roundsCount, rollDice) => {
//   const initObj = {
//     1: 0,
//     2: 0,
//     3: 0,
//     4: 0,
//     5: 0,
//     6: 0,
//   };

//   // массив всех бросков, он выглядит как `testAllRolls` над функцией `play()`
//     // Альтернатива: `_.times(roundsCount, rollDice)`
//     // где `_.times(количество-итераций, результат-броска)`
//     // Сортировать не обязательно
//   const rolls = getAllRolls(roundsCount, rollDice, []).sort();
//   // console.log(rolls);
//   // console.log();

//   // Считает количество вхождений каждой цифры от 1 до 6
//   const rollsCount = rolls.reduce((acc, cur) => {
//     acc[cur] = (acc[cur] || 0) + 1;
//     return acc;
//   }, initObj);
//   // console.log(rollsCount);
//   // console.log();

//   const values = Object.values(rollsCount);
//   const valuesToSymbols = getProgressLine(values);
//   const result = _.zip(initArr, valuesToSymbols);

//   console.log(result.map((el) => el.join('')).join('\n'));
// };

// ======================================

// ============= TEACHER =====================

const play = (roundsCount, rollDice) => {
  const bar = '#';
  const rolls = _.times(roundsCount, tRollDice);
  console.log('>> rolls:');
  console.log(rolls);
  console.log();

  const diceSides = _.range(1, 7);

  const lines = diceSides.map((side) => {
    const count = rolls.filter((roll) => roll === side).length;
    const displayCount = count !== 0 ? ` ${count}` : '';
    return `${side}|${bar.repeat(count)}${displayCount}`;
  });
  const str = lines.join('\n');

  console.log('>> lines:');
  console.log(lines);
  console.log();

  console.log('>> RESULT:');
  console.log(str);
  console.log();
};

// ===========================================

const roundsCount = 18;
play(roundsCount, tRollDice);

// export default play;

// console.log(play(100, rollDie));
// // => 1|####################### 23
// //    2|################## 18
// //    3|############# 13
// //    4|#################### 20
// //    5|############ 12
// //    6|############## 14

// console.log(play(13, rollDie));
// // => 1|
// //    2|## 2
// //    3|# 1
// //    4|## 2
// //    5|#### 4
// //    6|#### 4
