import _ from 'lodash';
// Задача

/*

Для задания цветов в HTML и CSS используются числа в шестнадцатеричной системе счисления.
Чтобы не возникало путаницы в определении системы счисления, перед шестнадцатеричным числом
ставят символ решетки #, например, #135278. Обозначение цвета (rrggbb) разбивается на три составляющие,
где первые два символа обозначают красную компоненту цвета, два средних — зеленую, а два последних — синюю.
Таким образом каждый из трех цветов — красный, зеленый и синий — может принимать значения от 00 до FF
в шестнадцатеричной системе исчисления.

solution.js
При работе с цветами часто нужно получить отдельные значения красного, зеленого и синего (RGB) компонентов цвета в десятичной системе исчисления и наоборот. Реализуйте и экспортируйте функции rgbToHex() и hexToRgb(), которые возвращают соответствующие представление цвета.

Примеры
hexToRgb('#24ab00'); // { r: 36, g: 171, b: 0 }

rgbToHex(36, 171, 0); // '#24ab00'

Подсказки

Вам может понадобится функция chunk из библиотеки lodash.
https://lodash.com/docs/4.17.15#chunk

Используйте функцию parseInt() для перевода строки в необходимую систему счисления
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/parseInt

Изучите возможности метода toString() для числа, рассмотрите примеры
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

Дополнительно можно использовать метод padStart()
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

*/

/*

# Алгоритм

## hexToRgb('#24ab00'); // { r: 36, g: 171, b: 0 }
Возвращает объект!

С помощь `.map()` отображаем входную строку-аргумент – получаем её же без решётки `#` // --> '24ab00'

Лодашом чанкуем строку, получаем массив с тремя подмассивами по два элемента в каждом:
[ [ '2', '4' ], [ 'a', 'b' ], [ '0', '0' ] ]

Объединияем элементы каждого подмассива в строку, в итоге получаем:
['24', 'ab', '00']

С помощью `.map()` и `parseInt(value, 16)` конвертируем каждый элемент в десятичную систему счисления,
записываем в перменную decimal

Деструктуризацией присваиваем каждому элементу массива соответствующие значения:
const [r, g, b] = decimal

Возвращаем объект, подаём в него эти rgb-переменные:
retur { r, g, b }

## rgbToHex(36, 171, 0); // '#24ab00'
Возвращает строку!

Аргументы такие: `rgbToHex(r, g, b)`

Каждый элемент конвертируем с помощью `.toString(16)` в шестнадцатеричную систему

Соединяем интерполяцией, приписав в начале `#`

*/

// ============= MY-TEACHER =====================

const hexToRgb = (hexStr) => {
  const hexClean = hexStr.slice(1);
  const [r, g, b] = _.chunk(hexClean, 2)
    .map((el) => el.join(''))
    .map((el) => parseInt(el, 16));

  return { r, g, b };
};

// // --- FIRST ---
// const rgbToHex = (r, g, b) => {
//   const arr = [r, g, b];
//   const decToHex = (str) => str.toString(16);
//   const isOneChar = (str) => str.length === 1;
//   const toHex = arr.map((el) => (isOneChar(decToHex(el)) ? decToHex(el).padStart(2, '0') : decToHex(el)));
//   const result = `#${toHex.join('')}`;

//   return result;
// };

// // --- BETTER ---
// const rgbToHex = (r, g, b) => {
//   const arr = [r, g, b];
//   const toHex = arr.map((el) => el.toString(16).padStart(2, '0'));
//   const result = `#${toHex.join('')}`;

//   return result;
// };

// ======================================

// ============= TEACHER =====================

const rgbToHex = (r, g, b) => {
  const hex = [r, g, b]
    .map((channel) => channel.toString(16).padStart(2, '0'))
    .join('');

  return `#${hex}`;
};

// ===========================================

console.log(hexToRgb('#24ab00')); // { r: 36, g: 171, b: 0 }

console.log();

console.log(`expected: #24ab00 \nreceived: ${rgbToHex(36, 171, 0)}\n`); // '#c60123'
console.log(`expected: #00840c \nreceived: ${rgbToHex(0, 132, 12)}\n`); // '#00840c'
console.log(`expected: #c60123 \nreceived: ${rgbToHex(198, 1, 35)}\n`); // '#c60123'
