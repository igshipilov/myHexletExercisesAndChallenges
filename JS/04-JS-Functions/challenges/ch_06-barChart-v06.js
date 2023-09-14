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

// НАГЛЯДНАЯ ПОДСКАЗКА
// [1, 3, 2]
// =>
// [0, 1, 0]
// [0, 1, 1]
// [1, 1, 1]


// >> РЕШЕНО
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

// Дозаполнять строку нулями надо в обе стороны:
// `.padStart(min, bar)` и `.padEnd(max, bar)`

// Появляются лишние строчки, когда числа только положительные:
// -- две лишние строчки
// -- когда последнее число равно `1`, то одна лишняя строчка
// ПРИЧИНА в значении `min`

// Не обрабатываются случаи, когда столбцы состоят сплошь из нулей (пробелов) –
// такие столбцы просто не появляются.


// >> ПРОБЛЕМЫ
// ---


// -----------------------------------------------------
// ============= MY ==========================


// const getLine = (number, min, max, sum) => {
//   const bar = number > 0 ? '*' : '#';
//   const space = ' ';

//   if (number > 0) {
//     return bar.repeat(number).padStart(max, space).padEnd(sum, space).split('');
//   } if (number < 0) {
//     return bar.repeat(Math.abs(number)).padEnd(min, space).padStart(sum, space).split('');
//   } if (number === 0) {
//     return space.repeat(sum).split('');
//   }

//   return space;
// };

// const hasPositive = (numbers) => Math.max(...numbers) > 0;
// const hasNegative = (numbers) => Math.min(...numbers) < 0;

// const getMatrix = (numbers) => {
//   const max = hasPositive(numbers) ? Math.max(...numbers) : 0;
//   const min = hasNegative(numbers) ? Math.abs(Math.min(...numbers)) : 0;
//   const sum = max + min;

//   return numbers.map((number) => getLine(number, min, max, sum));
// };

// const rotateMatrix = (matrix) => (matrix.length > 0 ? _.zip(...matrix) : []);

// const barChart = (numbers) => {
//   const result = rotateMatrix(getMatrix(numbers));

//   console.log(result.map((line) => line.join().replaceAll(',', '')).join('\n'));
// };

// const arr2 = [1, 2, 0, 0, -1, -2];

// barChart(arr2);
// ===========================================


// ============= TEACHER =====================
// const barChart = (numbers) => {
//   const bottom = Math.min(0, ...numbers);
//   const top = Math.max(0, ...numbers);

//   const lines = numbers.map((number) => {
//     const bar = number > 0 ? '*'.repeat(number) : '#'.repeat(Math.abs(number));
//     const bottomSpace = ' '.repeat(Math.min(0, number) - bottom);
//     const topSpace = ' '.repeat(top - Math.max(0, number));

//     return [...topSpace, ...bar, ...bottomSpace];
//   });

//   const chart = _.zip(...lines)
//     .map((line) => line.join(''))
//     .join('\n');

//   console.log(chart);
// };

// const arr2 = [1, 2, 0, 0, -1, -2];
// barChart(arr2);

// ===========================================

// В решении учителя эти строки:
  // const bottom = Math.min(0, ...numbers);
  // const top = Math.max(0, ...numbers);

// Заменяют эти строки из моего решения:
  // const hasPositive = (numbers) => Math.max(...numbers) > 0;
  // const hasNegative = (numbers) => Math.min(...numbers) < 0;

  // const getMatrix = (numbers) => {
  //   const max = hasPositive(numbers) ? Math.max(...numbers) : 0;
  //   const min = hasNegative(numbers) ? Math.abs(Math.min(...numbers)) : 0;
  // ...
  // };



// В решении учителя эти строки:
  // const bottomSpace = ' '.repeat(Math.min(0, number) - bottom);
  // const topSpace = ' '.repeat(top - Math.max(0, number));

// Заменяют эти строки из моего решения, кроме части `.split('')`:
  // if (number > 0) {
  //   return bar.repeat(number).padStart(max, space).padEnd(sum, space).split('');
  // } if (number < 0) {
  //   return bar.repeat(Math.abs(number)).padEnd(min, space).padStart(sum, space).split('');
  // }




// ============= MY- TEACHER =================

// ЛОГИКА
// Создаём матрицу, где массивы состоят из пробелов, баров и снова пробелов.
// После разворота матрицы:
  // -- пробелы справа станут пробелами снизу
  // -- пробелы слева станут пробелами сверху

// В конечном результате пробелы идут так: 
  // сверху над отрицательными
  // снизу под положительными

// То есть когда мы:
  // итерируем отрицательное число, то все возможные пробелы идут сверху (слева, до поворота матрицы)
  // итерируем положительное число, то все возможные пробелы идут снизу (справа, до поворота матрицы)

// Пробелы справа (снизу) равны наименьшему числу из входного массива-аргумента минус бары в этой строке
// Пробелы слева (сверху) равны наибольшему числу из входного массива-аргумента минус бары в этой строке


const barChart = (numbers) => {
  const min = Math.min(0, ...numbers);
  // console.log(min);

  const max = Math.max(0, ...numbers);
  // console.log(max);

  const chart = numbers.map((number) => {
    const bar = number > 0 ? '*'.repeat(number) : '#'.repeat(Math.abs(number));
    const topSpace = ' '.repeat(max - Math.max(0, number));
    const bottomSpace = ' '.repeat(Math.min(0, number) - min);

    return [ ...topSpace, ...bar, ...bottomSpace ];
  });
  
  const rotatedChart = _.zip(...chart)
    .map((line) => line.join(''))
    .join('\n');

  console.log(rotatedChart);

};

  const arr2 = [1, 2, 0, 0, -1, -2];
  barChart(arr2);

  // console.log(_.zip(arr2, arr2, arr2))
// ===========================================


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
