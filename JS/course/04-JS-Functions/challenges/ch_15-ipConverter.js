import chunk from 'lodash/chunk.js';
// Задача
/*

Реализуйте и экспортируйте функции ipToInt() и intToIp(), которые преобразовывают
представление IP-адреса из десятичного формата с точками в 32-битное число в десятичной форме и обратно.

Функция ipToInt() принимает на вход строку и должна возвращать число. А функция intToIp() наоборот:
принимает на вход число, а возвращает строку.

Примеры
ipToInt('128.32.10.1'); // 2149583361
ipToInt('0.0.0.0'); // 0
ipToInt('255.255.255.255'); // 4294967295

intToIp(2149583361); // '128.32.10.1'
intToIp(0); // '0.0.0.0'
intToIp(4294967295); // '255.255.255.255'

Подсказки

IPv4
https://ru.wikipedia.org/wiki/IPv4

Используйте функцию parseInt() для перевода строки в необходимую систему счисления
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/parseInt

Изучите возможности метода toString() для числа, рассмотрите примеры
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

Дополнительно можно использовать метод padStart()
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

*/

/*

# Калькулятор для сверки
https://tools.iplocation.net/ip-to-integer-converter

# Алгоритм
     AAA.BBB.CCC.DDD
min: 0.0.0.0
max: 255.255.255.255

AAA. = num*256*256*256
BBB. = num*256*256
CCC. = num*256
DDD  = num

## ipToInt

Переводим строку в массив `.split('.')`

Деструктуризацией разбиваем массив на четыре части: `[a, b, c, d]`
  a = a * 256 * 256 * 256
  b = b * 256 * 256
  c = c * 256
  d = d

result = a + b + c + d

*/

// ============= MY =====================

// ## ipToInt()

// ----- Решение в лоб ---------------
// const ipToInt = (str) => {
//   const arr = str.split('.');
//   const [a, b, c, d] = arr;

//   const numA = Number(a);
//   const numB = Number(b);
//   const numC = Number(c);
//   const numD = Number(d);

//   const calcA = numA * 256 * 256 * 256;
//   const calcB = numB * 256 * 256;
//   const calcC = numC * 256;
//   const calcD = numD;

//   const result = calcA + calcB + calcC + calcD;

//   return result;
// };

// ------------ Рекурся через if --------------
// const ipToInt = (str) => {
//   const arr = str.split('.');
//   const [a, b, c, d] = arr;
//   const len = arr.length - 1;

//   return arr
//     .map((el) => Number(el))
//     .reduce((acc, el, index) => {
//       // el * 256 такое количество раз, сколько Math.abs(index - len)
//       const mult = (index) => {
//         if (index === 0) {
//           return 1;
//         }
//         return 256 * mult(index - 1);
//       }
//       const multResult = mult(Math.abs(index - len));
//       const result = acc + (el * multResult);

//       return result;
//     }, 0);
// };

// ------------ Рекурся через тернарник --------------
// const ipToInt = (str) => {
//   const arr = str.split('.');
//   const lastIndex = arr.length - 1;

//   return arr
//     .map((el) => Number(el))
//     .reduce((acc, el, index) => {
//       // el * 256 такое количество раз, сколько Math.abs(index - lastIndex)
//       const mult = (multiplier) => !multiplier ? 1 : 256 * mult(multiplier - 1);
//       const multResult = mult(Math.abs(index - lastIndex));
//       const result = acc + (el * multResult);

//       return result;
//     }, 0);
// };
// --------------------------------------------------

// ------------ Шестнадцатеричная система счисления--

// // Переводим строку в массив
// // Каждый элемент массива:
// //  - в число
// //  - в 16-чную систему счисления
// // Убираем точки – сливаем в строку
// // parseInt(result) -> получаем 10-чное число

// const ipToInt = (str) => {
//   const result = str.split('.')
//     .map((el) => Number(el).toString(16).padStart(2, '00'));

//   return parseInt(result.join(''), 16);
// };

// // Переводим число-аргумент в 16-чную систему счисления
// // Чанкуем по два элемента в подмассив
// // pasrseInt (map join(''), 16)
// // Добавляем точки между символами: join('.')

// const intToIp = (num) => {
//   const arr = chunk(num.toString(16).padStart(8, '0'), 2);
//   const result = arr.map((el) => parseInt(el.join(''), 16))

//   return result.join('.');
// };

// -------------------------------------------------
// ======================================

// ============= TEACHER =====================

const ipToInt = (ip) => {
  const ipToHex = ip
    .split('.')
    .map((octet) => Number(octet).toString(16).padStart(2, '0'))
    .join('');

  return parseInt(ipToHex, 16);
};

const intToIp = (int) => {
  const intToHex = int.toString(16).padStart(8, 0);

  return chunk(intToHex, 2)
    .map((octet) => parseInt(octet.join(''), 16))
    .join('.');
};

// ===========================================
// ## intToIp

// --- Ниточки для размышления ---
// Если я заново решу `ipToInt()`, только теперь через 16-чную систему счисления,
// тогда могу догадаться, как решить `inToIp()`
// Решение через 16-чную систему
// каждый байт ip адреса переводится в шестнадцатиричную систему,
// затем все байты записываются в одно число в том же порядке как они стоя в ip адресе,
// и затем это число переводится в десятичную систему
// 123.234.34.45 = 0x7B.0xEA.0x22.0x2D = 0x7BEA222D = 2078941741

// Допы:
// IPv4 использует 32-битные (четырёхбайтные) адреса

// Октет (байт):
// https://ru.wikipedia.org/wiki/Октет_(информатика)

// См. раздел Представление числа
// https://ru.wikipedia.org/wiki/IPv4#Представление_адреса
// Там представлен перевод одного ip-адреса в разные системы счисления
// Вот какие-то из них можно использовать как промежуточные.

// Подсказка на решение
// число в шестнадцатеричной системе счисления в десятичном виде это и есть 32-битное число в десятичной форме
// Конвертер: https://tools.iplocation.net/ip-to-integer-converter
// в графе Enter Decimal to Convert IPv4/IPv6:
// при вводе 255 возвращает ff

// Решение через 2-чную систему
// 128.32.10.1 == 10000000.00100000.00001010.00000001
// Возможно, для такого результата придётся использовать rexexp.
// Хотя достаточно `_.chunk()`

console.log(ipToInt('128.32.10.1')); // 2149583361
console.log(ipToInt('128.32.10.1') === 2149583361);
console.log();

console.log(ipToInt('0.0.0.0')); // 0
console.log(ipToInt('0.0.0.0') === 0);
console.log();

console.log(ipToInt('255.255.255.255')); // 4294967295
console.log(ipToInt('255.255.255.255') === 4294967295);
console.log();

// console.log()

console.log('expected: ' + '128.32.10.1');
console.log(intToIp(2149583361)); // '128.32.10.1'
console.log(intToIp(2149583361) === '128.32.10.1');
console.log();

console.log('expected: ' + '0.0.0.0');
console.log(intToIp(0)); // '0.0.0.0'
console.log(intToIp(0) === '0.0.0.0');
console.log();

console.log('expected: ' + '255.255.255.255');
console.log(intToIp(4294967295)); // '255.255.255.255'
console.log(intToIp(4294967295) === '255.255.255.255');
console.log();

console.log('expected: ' + '0.0.0.32');
console.log(intToIp(32)); // '0.0.0.32'
console.log(intToIp(32) === '0.0.0.32');
console.log();

console.log('expected: ' + '10.0.115.0');
console.log(intToIp(167801600)); // '10.0.115.0'
console.log(intToIp(167801600) === '10.0.115.0');
console.log();
