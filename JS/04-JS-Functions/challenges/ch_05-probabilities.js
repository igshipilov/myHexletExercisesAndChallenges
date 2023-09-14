import _ from 'lodash';

// Задача
/*
https://ru.hexlet.io/challenges/js_functions_probabilities_exercise/instance

Игральная кость – шестигранный кубик, который бросается несколько раз.

probabilities.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
историю подбрасывания кубика в виде массива и возвращает объект.
Ключом этого объекта служит число из списка, а значением – ещё один объект,
в котором ключи – это числа, выпавшие сразу после первоначального числа, а значения – вероятность их выпадения.

Например, если передать на вход массив [1, 3, 1, 5, 1], итоговый объект будет выглядеть так:

{
  1: { 3: 0.5, 5: 0.5 },
  3: { 1: 1 },
  5: { 1: 1 },
};

После числа 1 выпадали числа 3 и 5 с равной долей вероятности 0.5.
А после чисел 3 и 5 всегда выпадала единица, что даёт нам вероятность в 1.

calculateProbabilities([]); // {}
calculateProbabilities([1, 3, 1, 5, 1, 2, 1, 6]);

{
  1: {
      2: 0.25,
      3: 0.25,
      5: 0.25,
      6: 0.25,
    },
  2: { 1: 1 },
  3: { 1: 1 },
  5: { 1: 1 },
  6: {},
};

*/

/*

# Объяснение

Проходимся по массиву
Смотрим два числа:
  - текущее итерируемое
  - следующее за ним

В объект записываем вероятность выпадения второго числа.
У нас в массиве одно и то же число может встречаться несколько раз
и каждый раз мы должны учитывать число, идущее за текущим.

# Пример:

Пришёл массив: [2, 5, 4, 1, 4, 3]
Ответ выглядит так:
{
  1: { 4: 1 }
  2: { 5: 1 }
  4: {
    1: 0.5,
    3: 0.5,
  }
  5: { 4: 1 }
}

Один раз после четвёрки шла единица и один раз после четвёрки шла тройка –
всего после четвёрки выпадало только эти два числа.
Мы записываем оба эти числа и вероятность выпадения обоих.

Заносим в объект ключи: их имена – сами элементы массива (цифры 1-6).

Значение каждого ключа – объект.

Ключ этого значения-объекта – это имя элемента, идущего после имени его родительского ключа.
Ключей в этом подобъекте может быть несколько.

Значение ключа подобъекта – это и есть вероятность.
Высчитываем её так: (как?)

  Например, текущий итерируемый элемент: `1`
  Массив: `[1, 2, 1, 2, 1, 3, 1, 3, 1, 3, 1]`

  Если после единицы два раза шла `2` и три траза шла `3`,
  то `{ 1: { 2: 0.4, 3: 0.6 } }`

  Вот как высчитать эти `0.4` и `0.6`?

Ответ:
Количество вхождений числа, вероятность для которого мы высчитываем
делим на суммарное вхождение чисел.

Вот у нас пять чисел, идущих после всех имеющихся единиц.
Двоек у нас две.
Троек у нас три.

Итого вероятность появления `2` = 2 / 5 = 0.4
Итого вероятность появления `3` = 3 / 5 = 0.6

• Как посчитать количество всех чисел, идущих после текущего элемента?
  то есть считаем:
    - количество чисел после всех единиц
    - количество чисел после всех двоек
    - количество чисел после всех троек

Ответ:
elements.filter((current, index) => elements[index - 1] === element).length

• Как посчитать отдельно количество двоек, троек и других чисел, идущих именно после текущего элемента?

# Подсказка

Как наполняется объект?

const a = {};
const b = {};

a['1'] = b;
b['2'] = 3;

console.log(a); // { '1': { '2': 3 } }

# Алгоритм

Перебираем массив

Если пока ещё отсутствует в объекте ключ, имя которого есть текущее итерируемое число,
то добавляем ключ с таким именем.

Значение ключа всегда подобъект.

Имя ключа в этом подобъекте – это элемент, идущий вслед за текущим итерируемым элементом массива.

Значение этого ключа в подобъекте – это частота, с которой данный элемент (число) появлялось
после текущего итерируемого элемента.

То есть в подобъект мы пишем ответ на вопрос:
а как часто данное число встречалось после текущего итерируемого элемента?

// ## TIP
// _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
// // => { 'a': { 'b': 2, 'c': 3 } }

*/

// ============= MY =====================
// ------ V1 ---------
// const calculateProbabilities = (arr) => {
//   if (!arr.length) {
//     return {};
//   }
//   const obj = {};
//   if (!Object.hasOwn(obj, arr[0])) {
//     obj[arr[0]] = {};
//     obj[arr[0]] = 'a';

//   }

//   return obj;
// };

// ------ V2 ---------
// const calculateProbabilities = (arr) => {
//   if (!arr.length) {
//     return {};
//   }

//   const result = arr.reduce((acc, el, index) => {
//     const obj = {};
//     const nextEl = arr[index + 1];
//     // obj[nextEl] = _.get(obj, obj[nextEl], 0) + 1;
//     obj[nextEl] = obj[nextEl];
//     const calc = _.get(acc, el, obj);
//     return { ...acc, [el]: calc };

//   }, {})

//   return result;
// };

// const calculateProbabilities = (arr) => {
//   if (!arr.length) {
//     return {};
//   }

//   const result = arr.map((el) => {
//     const [el] = {};
//   });

//   return result;
// };
// ======================================

// ============= TEACHER =====================

// ----------------------------------------------------

// // >> Объяснение того, как работает `findProbabilityForElement()`
// const arr = [1, 3, 1, 5, 1, 2, 1, 6];

// // Возвращает список всех элементов, идущих после указанного эталонного элемента (второго аргумента)
// const getElementsAfterCurrent = (elements, element) => {
//   return elements
//     // Возвращает массив, наполняя его текущими итерируемыми элементами,
//     // фильтрует по условию: если предыдущий элемент равен эталонному, то вернуть текущий элемент
//     .filter((current, index) => elements[index - 1] === element)

//     // Заносит в объект элементы из массива, полученного из `.filter`
//     // Затем производит расчёт по функции (сейчас вместо неё стоит заглушка 'temp')
//     .reduce((acc, el) => {
//       return { ...acc, [el]: 'temp'}
//     }, {});
// };

// console.log(getElementsAfterCurrent(arr, 1));
// ----------------------------------------------------

// // Получает отфильтрованный массив (!)
// // Мы знаем, что в объекте не бывает дублирующихся ключей,
// // но в массиве могут находиться одинаковые элементы,
// // то есть имея исходный массив `[1, 3, 1, 3, 1, 5]`
// // и отфильтровав его по числам, идущим после единицы, мы получим:
// // `[3, 3, 5]`
// // при этом в объекте будет лишь:
// // { 3: ..., 5:... } // нет второй `тройки`

// // Теперь, чтобы узнать, сколько раз встречалась тройка, а сколько раз встречалась пятёрка,
// // нам достаточно лишь итеративно через `.reduce()` проверять каждый элемент этого же отфильтрованного массива,
// // а затем делить это полученное значение на общее количество отфильтрованных элементов, что и делает строка:
// // const probability = countElements(filtered, currentElement) / totalElements;

// const countElements = (elements, element) => elements
//   .filter((current) => current === element).length;

// const findProbabilityForElement = (elements, element) => elements
//   .filter((current, index) => elements[index - 1] === element)
//   .reduce((acc, currentElement, i, filtered) => {
//     const totalElements = filtered.length;
//     const probability = countElements(filtered, currentElement) / totalElements;
//     return { ...acc, [currentElement]: probability };
//   }, {});

// const calculateProbabilities = (numbers) => _.uniq(numbers)
//   .reduce((acc, number) => {
//     // `probabilities` возвращает объект
//     const probabilities = findProbabilityForElement(numbers, number);
//     return { ...acc, [number]: probabilities };
//   }, {});

// ===========================================

// ============= MY-TEACHER ==================

// Дан массив: [1, 3, 1, 5, 1, 2, 1, 6]

// Заносим в объект все числа из данного массива

// В значение каждого ключа записываем объект
// внутри этого объекта: ключи, имена которых – это все числа,
// идущие после числа, соответствующего ключу-родителю этого объекта:
// так записываем ключ-родитель: { 1: {...} }
// так записываем ключи объекта внутри ключа-родителя: { 1: { 2: ..., 3: ..., 5: ..., 6: ... } }
// так записываем значение ключей объекта внутри ключа-родителя: { 1: { 2: 0.25, 3: 0.25, 5: 0.25, 6: 0.25 } }

const calcHowOftenElementOccursAfterCurrentKey = (elements, element) => elements
  .filter((current) => current === element).length;

const getProbabilities = (elements, element) => elements
  .filter((current, index) => element === elements[index - 1])
  .reduce((acc, el, i, filtered) => {
    const calculate = calcHowOftenElementOccursAfterCurrentKey(filtered, el) / filtered.length;
    return { ...acc, [el]: calculate };
  }, {});

const calculateProbabilities = (numbers) => _.uniq(numbers)
  .reduce((acc, number) => {
    const probabilities = getProbabilities(numbers, number);
    return { ...acc, [number]: probabilities };
  }, {});
// ===========================================

// console.log(calculateProbabilities([])); // {}

// console.log(calculateProbabilities([1, 3, 1, 5, 1]));
// {
//   1: { 3: 0.5, 5: 0.5 },
//   3: { 1: 1 },
//   5: { 1: 1 },
// };

// console.log([1, 3, 1, 5, 1, 2, 1, 6].length)
console.log(calculateProbabilities([1, 3, 1, 5, 1, 2, 1, 6]));

// // {
// //   1: {
// //       2: 0.25,
// //       3: 0.25,
// //       5: 0.25,
// //       6: 0.25,
// //     },
// //   2: { 1: 1 },
// //   3: { 1: 1 },
// //   5: { 1: 1 },
// //   6: {},
// // };
