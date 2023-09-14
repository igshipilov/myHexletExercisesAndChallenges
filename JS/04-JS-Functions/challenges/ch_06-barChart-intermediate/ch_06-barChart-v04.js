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

// Мы строим график сразу по каждому итерируемому числу
// При этом каждое число дозаполняется нулями до суммы `max` и `min`,
// но `max` считается, если в массиве есть хотя бы одно положительное число,
// а `min` считается, если в массиве есть хотя бы одно отрицательное число.
//

// Написать функцию, которая проверяет, есть ли в массиве хотя бы одно положительное число.
// Guard Expression отсеит пустые массивы, поэтому достаточно проверить на 'positiveness',
// т.к. иначе в массиве только отрицательные числа.

// Надо понять, суммировать ли `min + max`
// или вовзращать только `min`,
// или вовзращать только `max`.
// Для этого

// -----------------------------------------------------

// ============= MY =====================

const isPositive = (number) => number > 0;

const hasPositive = (numbers) => Math.max(...numbers) > 0;
const hasNegative = (numbers) => Math.min(...numbers) < 0;
// console.log(hasPositive(arr));
// console.log(hasNegative(arr));

const hasPositiveOnly = (numbers) => numbers.filter((number) => number < 0).length === 0;
const hasNegativeOnly = (numbers) => numbers.filter((number) => number > 0).length === 0;

// console.log(hasPositiveOnly(arr));
// console.log(hasNegativeOnly(arr));

const getMatrix = (numbers, len) => {
  if (numbers.length === 0) {
    return [];
  }

  const max = Math.max(...numbers);
  const min = Math.abs(Math.min(...numbers));

  let size = 0;
  if (hasPositive(numbers) && hasNegative(numbers)) {
    size = max + min;
  }
  if (hasPositive(numbers) && !hasNegative(numbers)) {
    size = max;
  }
  if (!hasPositive(numbers) && hasNegative(numbers)) {
    size = min;
  }

  // const size = isPositive(numbers) ? max : min;

  const bar = isPositive(numbers) ? '*' : '#';
  const space = ' ';

  // const numbersAbs = numbers.map((number) => Math.abs(number));
  const arr = numbers.map((number) => (isPositive(number) ? number.padEnd(len, '0') : number.padStart(len, '0')));
  console.log(arr);

  const result = arr.map((number) => bar.repeat(Math.abs(number))
    .padStart(size, space)
    .split(''));

  return result;
};

const arr = [-5, 3, -5];
console.log(getMatrix(arr));

// const rotateMatrix = (matrix) => matrix.length > 0 ? _.zip(...matrix) : [];

// const cleanMatrix = (matrix) => matrix.map((numbers) => numbers.join()
//   .replaceAll(',', '')).join('\n');

// const barChart = (numbers) => {
//   const len = numbers.length;
//   const positive = numbers.filter((number) => number > 0);
//   const negative = numbers.filter((number) => number < 0);

//   // return getMatrix(positive, len);
//   // return getMatrix(negative, len);

//   // const barPositive = cleanMatrix(rotateMatrix(getMatrix(positive)));
//   // const barNegative = cleanMatrix(rotateMatrix(getMatrix(negative)));
//   const barPositive = rotateMatrix(getMatrix(positive, len));
//   const barNegative = _.reverse(rotateMatrix(getMatrix(negative, len)));

//   const result = _.concat(barPositive, barNegative);
//   console.log(cleanMatrix(result));

//   // return cleanMatrix(barPositive);
//   // return cleanMatrix(barNegative);

//   // return barNegative;
//   // return barPositive;
// };

// ======================================

// ============= TEACHER =====================

// ===========================================

// console.log('>> RESULT:')
// const testArr = [1, 3, 2, 5, -4, -2];
// const testArr = [ 2 ];
// barChart([5, -5, 5]);

// console.log('>> INTER:')
// console.log('>> getMatrix:')
// const matrix = getMatrix(testArr);
// console.log(matrix);
// console.log()

// console.log('>> rotateMatrix:')
// const rotated = rotateMatrix(matrix);
// console.log(rotated);
// console.log()

// console.log('>> cleanMatrix:')
// const cleaned = cleanMatrix(rotated);
// console.log(cleaned);
// console.log()

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
