import _ from 'lodash';

// Задача
/*
https://ru.hexlet.io/challenges/js_functions_bar_chart_exercise

Реализуйте и экспортируйте по умолчанию функцию, которая выводит на экран столбчатую диаграмму.
Функция принимает в качестве параметра последовательность чисел, длина которой равна
количеству столбцов диаграммы. Размер диаграммы по вертикали должен определяться входными данными.

Примеры

import barChart from '../solution.js';

barChart([5, 10, -5, -3, 7]);
// =>  *
//     *
//     *
//     *  *
//     *  *
//    **  *
//    **  *
//    **  *
//    **  *
//    **  *
//      ##
//      ##
//      ##
//      #
//      #

barChart([5, -2, 10, 6, 1, 2, 6, 4, 8, 1, -1, 7, 3, -5, 5]);
// =>   *
//      *
//      *     *
//      *     *  *
//      **  * *  *
//    * **  * *  *  *
//    * **  ***  *  *
//    * **  ***  ** *
//    * ** ****  ** *
//    * ******** ** *
//     #        #  #
//     #           #
//                 #
//                 #
//                 #

Подсказки:

Для решения задачи вы можете использовать функции из библиотеки lodash
https://lodash.com/docs/4.17.15

*/

/*

# Алгоритм

Вообще, надо получить массив, состоящий из подмассивов,
где каждый элемент (подмассив) – это шаг массива-аргумента функции `barChart()`.

В каждом подмассиве будут только числа: -1, 0, 1.
  - все нули заменяются пробелом
  - все единицы заменяются звёздочкой
  - все минус единицы заменяются решёткой.

Значение элемента (число) – это количество строчек,
в которых на данном индексе будет записан символ '*' или '#' или ' ' (пробел).

--------------

Проходимся по массиву.

Возвращаем массив с подмассивами, где каждый подмассив равен длине основного массива.
Итерируем каждый элемент каждого подмассива:
  - если элемент >0, то делаем ему -1, пока `Mat.max()` >0
  - если элемент <0, то делаем ему +1, пока `Mat.min()` <0

Методом `.map()` ещё раз проходимся по каждому элементу каждого подмассива,
применяем к каждому элементу Math.sign() и сразу же:
  - если элемент `1`, то заменяем его на `*`
  - если элемент `1`, то заменяем его на `*`
  - если элемент `0`, то заменяем его на `' '` (пробел)

Если `el` меньше `max`, то `return 0`,
иначе `return el - 1`

## Идея: поворот матрицы

Создаём матрицу: массив подмассивов.

Каждый подмассив – это единицы, их количество мы определяем
по значению текущего итерируемого элемента массива.

Как обрабатываем отрицательные значения?
Минус должен влиять на сторону, с которой мы добавим нули.

  Если итерируемый элемент >0, то нули дописываются справа -- `.push()`?
  Если итерируемый элемент <0, то нули дописываются слева -- `.unshift()`?

  Заполнять лучше методом `.fill(value, start, end)

Поворачиваем матрицу _.reverse(_.zip())

*/

// ============= MY =====================

// Дан массив `[1, 2, -3]`
// Его надо привести к виду:
// [0, 1, 0]
// [1, 1, 0]
// [0, 0, -1]
// [0, 0, -1]
// [0, 0, -1]

// Ещё эту же запись можно представить так:
//  0, 1, 0, 1, 1, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1
// -----------------------------------------------------

// >> WORKS WITH POSITIVE NUMBERS
// const barChart = (numbers) => {
//   const len = numbers.length;
//   const max = Math.max(...numbers);
//   const times = numbers
//     .map((number) => _.times(number, _.constant(1))
//       .join().replaceAll(',', '').padStart(max, '0')
//       .split('')
//     )

//     // .map((number) => number.fill(0, 0, len - number.length));

//   const test = [
//     [ 0, 0, 1 ],
//     [ 1, 1, 1 ],
//     [ 0, 1, 1 ]
// ];
// // expected:
// //  [ 0, 1, 0 ]
// //  [ 0, 1, 1 ]
// //  [ 1, 1, 1 ]

//   // const rotated = _.zip(...test);
//   const rotated = _.zip(...times);

//   return rotated;
// };

// const getMatrix = (numbers) => {
//   const max = Math.max(...numbers);
//   const result = numbers
//     .filter((number) => number > 0)
//     .map((number) => _.times(Math.abs(number), _.constant(1))
//       .join().replaceAll(',', '').padStart(max, 0)
//       .split('')
//     );

//   // return result;
//   return _.zip(...result);
// };

const getMatrixPositive = (numbers) => {
  const max = Math.max(...numbers);
  const result = numbers
    // .filter((number) => number > 0)
    // .map((number) => _.times(Math.abs(number), _.constant(1))
    .map((number) => _.times(number, _.constant(1))
      .join().replaceAll(',', '').padStart(max, 0)
      .split(''));

  return result;
};

const getMatrixNegative = (numbers) => {
  const max = Math.max(...numbers);
  const min = Math.abs(Math.min(...numbers));

  const result = numbers
    .filter((number) => number < 0)
    .map((number) => _.times(Math.abs(number), _.constant(1))
      .join().replaceAll(',', '').padStart(min, 0)
      .split(''));

  return result;
};

const fillMatrixNegative = (numbers) => {
  const negativeNumbers = _.reverse(_.zip(...getMatrixNegative(testArr)));
  const len = negativeNumbers.length;

  const result = negativeNumbers
    .map((number) => _.times(Math.abs(number), _.constant(0))
      .join().replaceAll(',', '').padStart(len, 0)
      .split(''));

  return result;
};

// SOMETHING WRONG 2
// const barChart = (numbers) => {
//   const len = numbers.length;
//   const max = Math.max(...numbers);
//   const calcMin = Math.min(...numbers);
//   const min = calcMin < 0 ? Math.abs(calcMin) : 0;

//   const positiveNumbers = numbers
//     .map((number) => _.times(number, _.constant('*'))
//       .join().replaceAll(',', '').padStart(max, ' ')
//       .split('')
//     );
//   console.log();
//   console.log('>> positiveNumbers: ');
//   console.log(positiveNumbers);

//   const calcNegativeNumbers = numbers
//     .filter((number) => number < 0)
//     .map((number) => _.times(Math.abs(number), _.constant('#'))
//       .join().replaceAll(',', '').padEnd(min, ' ')
//       .split('')
//     );

//   const negativeNumbers = calcNegativeNumbers
//     .map((number) => number
//       .join().replaceAll(',', '').padStart(len, ' ')
//       .split('')
//     );
//     console.log();
//     console.log('>> negativeNumbers: ');
//     console.log(negativeNumbers);
//     // console.log(_.zip(...negativeNumbers));

//     // .map((number) => number.fill(0, 0, len - number.length));

//   const test = [
//     [ 0, 0, 1 ],
//     [ 1, 1, 1 ],
//     [ 0, 1, 1 ]
// ];
// // expected:
// //  [ 0, 1, 0 ]
// //  [ 0, 1, 1 ]
// //  [ 1, 1, 1 ]

//   console.log('\n' + '///////////////////////////');
//   console.log('>> RESULT:');
//   // const rotated = _.zip(...test);
//   const rotated = _.zip(...positiveNumbers);

//   return rotated;
// };

// SOMETHING WRONG 1
// const barChart = (numbers) => {
//   const len = numbers.length;
//   const max = Math.max(...numbers);
//   const calcMin = Math.min(...numbers);
//   const min = calcMin < 0 ? Math.abs(calcMin) : 0;
//   // const len = min < 0 ? max - min : max;

//   const positiveNumbers = numbers
//     // .filter((number) => number > 0)
//     .map((number) => _.times(number, _.constant(1))
//       .join().replaceAll(',', '').padStart(max, '0')
//       .split('')
//     );
//   console.log('>> positiveNumbers:');
//   console.log(_.zip(...positiveNumbers));
//   console.log();

//   const negativeNumbers = numbers
//     .filter((number) => number < 0)
//     .map((number) => _.times(Math.abs(number), _.constant(2))
//       .join().replaceAll(',', '').padEnd(max, '0')
//       .split('')
//     );
//   console.log('>> negativeNumbers: ');
//   // console.log(negativeNumbers);
//   console.log(_.zip(...negativeNumbers));
//   console.log();

//   const fullArr = _.concat(positiveNumbers, negativeNumbers);
//   console.log('>> fullArr: ');
//   console.log(fullArr);
//   console.log(_.zip(...fullArr));

// //   const test = [
// //     [ 0, 0, 1 ],
// //     [ 1, 1, 1 ],
// //     [ 0, 1, 1 ]
// // ];
// // // expected:
// // //  [ 0, 1, 0 ]
// // //  [ 0, 1, 1 ]
// // //  [ 1, 1, 1 ]

//   // const rotated = _.zip(...positiveNumbers);
//   const rotated = _.zip(...fullArr);

//   console.log('\n' + '///////////////////////////');
//   console.log('>> RESULT:');
//   return rotated;
// };

// ======================================

// ============= TEACHER =====================

// ===========================================

const testArr = [1, 3, 2, 5, -4, -2];

console.log('>> POSITIVE:');
console.log(getMatrixPositive(testArr));
console.log(_.zip(...getMatrixPositive(testArr)));
console.log();

console.log('>> NEGATIVE:');
console.log(getMatrixNegative(testArr));
console.log(_.reverse(_.zip(...getMatrixNegative(testArr))));
console.log();

console.log('>> FILL NEGATIVE:');
console.log(fillMatrixNegative(testArr));
console.log();

// console.log(barChart(testArr));

// [1, 3, 2]
// =>
// [0, 1, 0]
// [0, 1, 1]
// [1, 1, 1]

// const arr1 = [5, 10, -5, -3, 7];

// В тестах `arr2` снизу вылазят две лишние строчки, наполненные пробелами.
// const arr2 = [6, 8, 8, 8, 8, 8, 7, 6, 2, 6, 6, 8, 4, 6, 5, 2, 6, 7, 3, 7];
// barChart(arr2);
// =>  *
//     *
//     *
//     *  *
//     *  *
//    **  *
//    **  *
//    **  *
//    **  *
//    **  *
//      ##
//      ##
//      ##
//      #
//      #

// barChart([5, -2, 10, 6, 1, 2, 6, 4, 8, 1, -1, 7, 3, -5, 5]);
// =>   *
//      *
//      *     *
//      *     *  *
//      **  * *  *
//    * **  * *  *  *
//    * **  ***  *  *
//    * **  ***  ** *
//    * ** ****  ** *
//    * ******** ** *
//     #        #  #
//     #           #
//                 #
//                 #
//                 #
