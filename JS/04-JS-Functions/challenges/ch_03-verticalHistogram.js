import _ from 'lodash';

// Задача
/*
https://ru.hexlet.io/challenges/js_functions_vertical_histogram_exercise/instance

Игральная кость — шестигранный кубик, который бросается несколько раз.
Гистограмма — это графическое представление данных в виде столбцов или колонок.

histogram.js
Реализуйте и экспортируйте по умолчанию функцию, которая выводит на экран вертикальную гистограмму.
Функция принимает на вход количество бросков кубика и функцию, которая имитирует бросок игральной кости
(её реализовывать не нужно). Вызов этой функции генерирует значение от 1 до 6,
что соответствует одной из граней игральной кости.

Гистограмма содержит столбцы, каждому из которых соответствует грань игральной кости
и количество выпадений этой грани. Результаты отображаются графически (с помощью символов #)
и в виде процентного значения от общего количества бросков, за исключением случаев, когда количество равно 0 (нулю).

Дополнительные условия:

Процентные значения должны быть прижаты влево относительно столбца.
Значения сторон игральной кости должны быть посредине столбца.
Столбцы между собой разделены пробелом
Количество секций в столбце (высота столбца) должно соответствовать количеству выпадений
каждой из сторон игральной кости.

Примеры

import displayHistogram from '../histogram.js';

displayHistogram(32, rollDie);
// =>                 28%
//                    ###
//                    ###
//            19%     ###
//            ### 16% ### 16%
//    13%     ### ### ### ###
//    ### 9%  ### ### ### ###
//    ### ### ### ### ### ###
//    ### ### ### ### ### ###
//    ### ### ### ### ### ###
//    -----------------------
//     1   2   3   4   5   6

displayHistogram(13, rollDie);
// =>                 31% 31%
//                    ### ###
//        15%     15% ### ###
//        ### 8%  ### ### ###
//        ### ### ### ### ###
//    -----------------------
//     1   2   3   4   5   6

Подсказки:

Гистограмма.
https://ru.wikipedia.org/wiki/Гистограмма

Для решения задачи активно используйте функции из библиотеки lodash.
https://lodash.com/docs/4.17.15

При получении процентного значения используйте стандартные правила округления числа.

*/

/*

# Алгоритм

Элементы:
-- Бары: `###`
-- Стороны кубика `diceSides`: массив от 1 до 6
-- Три чёрточки над числом: `---`
-- Доп. чёрточка слева от каждой троицы чёрточек, кроме первой
-- Пробел слева от каждого бара, кроме баров первого столбца (столбцы между собой разделены пробелом)

*/

const tRollDice = () => Math.round(Math.random() * (6 - 1) + 1);
// console.log(tRollDice());

// ============= MY =====================

const displayHistogram = (rollsCount, callbackRollDice) => {
  // const bar = '###';
  const separator = '---';
  const diceSides = _.range(1, 7);
  // const rolls = _.times(rollsCount, callbackRollDice);
  const rolls = callbackRollDice;

  const numbers = diceSides.map((side) => rolls.filter((roll) => roll === side).length);
  const max = Math.max(...numbers);

  console.log('>> numbers: ');
  console.log(numbers);
  console.log();

  console.log('>> max:');
  console.log(max);
  console.log();

  // НАДО решать методом из `ch_06-barChart-v06.js`, оставив только `topSpace`:
  // const chart = numbers.map((number) => {
  //   const bar = '#'.repeat(number);
  //   const topSpace = ' '.repeat(max - Math.max(0, number));

  //   return [ ...topSpace, ...bar ];
  // });
  // console.log('>> chart:');
  // console.log(chart);
  // console.log();

  const chart = numbers.map((number) => {
    const bar = '#'.repeat(number);
    const percentage = '42%';
    const topSpace = ' '.repeat(max - number);
    const line = [...topSpace, percentage, ...bar];

    return line;

    // return [ ...topSpace, ...bar ];
  });
  console.log('>> chart:');
  console.log(chart);
  console.log();

  // const correctedChart = chart.join()
  //   // .map((el) => el === '#' ? el = '###' : el);
  // console.log('>> correctedChart:');
  // console.log(correctedChart);
  // console.log();

  const rotatedChart = _.zip(...chart);
  console.log('>> rotatedChart:');
  console.log(rotatedChart);
  console.log();

  const emptyLine = _.times(max, _.constant(' '));
  const correctedChart = rotatedChart.reduce((arr, line) => {
    const result = arr.unshift(line, emptyLine);

    return arr;
  }, []);
  console.log('>> correctedChart:');
  console.log(correctedChart);
  console.log();

  const fillCorrected = correctedChart
    .map((line) => line.join('')).join('\n')
    .replaceAll(' ', '   ')
    .replaceAll('#', '###');

  console.log('>> fillCorrected:');
  console.log(fillCorrected);
  console.log();

  // const lines = diceSides.map((side) => {
  //   const count = rolls.filter((roll) => roll === side).length;
  //   const result = bar.repeat(count);

  //   return result;
  // })

  // console.log(lines);
};
// ======================================

// ============= TEACHER =====================

// ===========================================

// displayHistogram(13, tRollDice);

displayHistogram(13, [2, 2, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6]);
// =>                 31% 31%
//                    ### ###
//        15%     15% ### ###
//        ### 8%  ### ### ###
//        ### ### ### ### ###
//    -----------------------
//     1   2   3   4   5   6

// displayHistogram(32, tRollDice);
// =>                 28%
//                    ###
//                    ###
//            19%     ###
//            ### 16% ### 16%
//    13%     ### ### ### ###
//    ### 9%  ### ### ### ###
//    ### ### ### ### ### ###
//    ### ### ### ### ### ###
//    ### ### ### ### ### ###
//    -----------------------
//     1   2   3   4   5   6
