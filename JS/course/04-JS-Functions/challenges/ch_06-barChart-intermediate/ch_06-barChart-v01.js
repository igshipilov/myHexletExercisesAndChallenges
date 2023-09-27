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

*/

// ============= MY =====================

// РАБОЧИЙ ВАРИАНТ v01 – здесь негативные значения тянутся вверх, а должны вниз

// 1. Функция, итерирующая массив, возвращает массив со значениями, сдвинутыми на `+1` или `-1`
// const getSteppedArray = (arr) => {
//   const callback = (el) => {
//     if (el === 0) {
//       return 0;
//     }
//     if (el > 0) {
//       return el - 1;
//     }
//     if (el < 0) {
//       return el + 1;
//     }
//   };
//   return arr.map(callback);
// };

// 2. Возвращает промежуточный массив с числами
// const arrChart = (arr) => {
//   const max = Math.abs(Math.max(...arr));
//   const min = Math.abs(Math.min(...arr));
//   const highest = max > min ? max : min;

//   const fin = [];
//   const recursive = (counter, acc) => {
//     if (counter === 0) {
//       return fin;
//     }
//     fin.unshift(acc);
//     return recursive (counter - 1, getSteppedArray(acc));
//   };

//   return recursive(highest, arr);
// };

// 3. Возвращает фин. массив
// const barChart = (arr) => {
//   const fullArr = arrChart(arr);

//   return fullArr.map((el) => el.map((sub) => {
//     const current = Math.sign(sub);
//     if (current === 0) {
//       return ' ';
//     }
//     if (current === 1) {
//       return '*';
//     }
//     if (current === -1) {
//       return '#';
//     }
//   }));
// };

// РАБОЧИЙ ВАРИАНТ v02 – проходит все тесты, кроме третьего (его я уже вписал в `const arr2`)
// Причина: создаются лишние пустые строки. Проблема в `.join('\n')`
const testArr = [1, 2, -1];
const arr2 = [6, 8, 8, 8, 8, 8, 7, 6, 2, 6, 6, 8, 4, 6, 5, 2, 6, 7, 3, 7];

// 1. Функция, итерирующая массив, возвращает массив со значениями, сдвинутыми на `-1`
const getSteppedArrayPositive = (arr) => {
  const callback = (el) => (el < 1 ? 0 : el - 1);
  return arr.map(callback);
};
// console.log(getSteppedArrayPositive(testArr));

// Функция, итерирующая массив, возвращает массив со значениями, сдвинутыми на `+1`
const getSteppedArrayNegative = (arr) => {
  const callback = (el) => (el < 1 ? 0 : el + 1);
  return arr.map(callback);
};
// console.log(getSteppedArrayNegative(testArr));

// 2. Возвращает промежуточный массив с числами
const arrChartPositive = (arr) => {
  const max = Math.abs(Math.max(...arr));

  const fin = [];
  const recursive = (counter, acc) => {
    const fixed = acc.map((el) => (el < 0 ? 0 : el));

    if (counter === 0) {
      return fin;
    }
    fin.unshift(fixed);
    return recursive(counter - 1, getSteppedArrayPositive(fixed));
  };

  return recursive(max, arr);
};
// console.log(arrChartPositive(testArr));

const arrChartNegative = (arr) => {
  const min = Math.abs(Math.min(...arr));

  const fin = [];
  const recursive = (counter, acc) => {
    const fixed = acc.map((el) => (el > 0 ? 0 : el));
    // const len = fixed.filter((el) => el > 0).length;

    if (counter === 0) {
      return fin;
    }
    fin.push(fixed);
    return recursive(counter - 1, getSteppedArrayNegative(fixed));
  };

  return recursive(min, arr);
};
// console.log(arrChartNegative(testArr));

// 3. Возвращает фин. массив
const barChart = (arr) => {
  const fullArr = _.concat(arrChartPositive(arr), arrChartNegative(arr));
  // console.log(fullArr);

  const result = fullArr.map((el) => el.map((sub) => {
    const current = Math.sign(sub);
    if (current === 0) {
      return ' ';
    }
    if (current === 1) {
      return '*';
    }
    if (current === -1) {
      return '#';
    }
  }));
  // console.log(result);
  console.log(result.join('\n').replaceAll(',', ''));
};

// ======================================

// ============= TEACHER =====================

// ===========================================

// barChart(testArr)

const testArr2 = [1, 2, -2];
barChart(testArr2);

// const arr1 = [5, 10, -5, -3, 7];
// barChart(arr1);

// console.log(arrChartPositive(arr2));
// console.log(arrChartNegative(arr2));

// console.log(arrChart(arr));

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
