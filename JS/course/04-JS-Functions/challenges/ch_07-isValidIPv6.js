import _ from 'lodash';

// Задача
/*
https://ru.hexlet.io/challenges/js_functions_ipv6_validator_exercise

validator.js
Реализуйте функцию-предикат isValidIPv6(), которая проверяет IPv6-адреса (адреса шестой версии интернет протокола) на корректность. Функция принимает на вход строку с адресом IPv6 и возвращает true, если адрес корректный, а в противном случае false. Экспортируйте функцию по умолчанию.

Дополнительные условия:

Работа функции не зависит от регистра символов
Ведущие нули в группах цифр необязательны
Самая длинная последовательность групп нулей, например, :0:0:0: может быть заменена на два двоеточия ::.
Такую замену можно произвести только один раз

Примеры

isValidIPv6('10:d3:2d06:24:400c:5ee0:be:3d'); // true
isValidIPv6('0B0:0F09:7f05:e2F3:0D:0:e0:7000'); // true
isValidIPv6('000::B36:3C:00F0:7:937'); // true
isValidIPv6('::1'); // true
isValidIPv6('1001:208:67:4f00:e3::2c6:0'); // true

isValidIPv6('2607:G8B0:4010:801::1004'); // false
isValidIPv6('2.001::'); // false
isValidIPv6('9f8:0:69S0:9:9:d9a:672:f90d'); // false

Подсказки

IPv6
https://datatracker.ietf.org/doc/html/rfc4291.html#section-2.2

Для проверки пограничных случаев внимательно изучите список IP-адресов в модуле с тестами

*/

/*

# Алгоритм

Фильтруем несколько раз. В конце проверяем:
  - если получился пустой массив, то return false
  - иначе return true.

return false в случаях:
  - Если двоеточий >7 или <2
  Для этого фильтрую по двоеточиям `:` и затем нахожу длину полученного массива

  - Если `:` первый символ, а перед ним идёт число
  - Если `:` последний символ, а за ним идёт число

  - Если количество символов между `:` больше 4

  - Если `:` встречается больше двух раз подряд

  - Если среди букв есть буквы, не входящие в 16-чную систему счисления
    -- Можно проверить

*/

// ============= MY =====================
// ---------------- V1 ----------------------
// const hexaSymbols = ['a', 'b', 'c', 'd', 'e', 'f']

// const isValidIPv6 = (ip) => {
//   const third = ip.split(':::').length;

//   const colons = ip.split('').filter((el) => el === ':').length;

//   const firstChar = ip[0];
//   const lastChar = ip[ip.length - 1];

//   const quantity = ip
//     .split(':')
//     .filter((el) => el.length > 4)
//     .length;

//   const letters = ip
//     .split('')
//     .filter((el) => (isNaN(Number(el))  && el !== ':'))
//     .map((el) => el.toLowerCase())
//     .filter((el) => !hexaSymbols.includes(el))
//     .length;

//   const pairColons = ip.split('::').length;

//   if (third > 1) {
//     return false;
//   }

//   if (colons > 7 || colons < 2) {
//     return false;
//   }

//   if (firstChar === ':' && ip[1] !== ':') {
//     return false
//   }

//   if (lastChar === ':' && ip[ip.length - 2] !== ':') {
//     return false;
//   }

//   if (quantity) {
//     return false;
//   }

//   if (letters) {
//     return false;
//   }

//   if (pairColons > 2) {
//     return false;
//   }

//   return true;
// };
// ------------------------------------------

// ---------------- V2-TEACHER ----------------------

const isValidGroup = (group) => {
  const number = Number(`0x${group}`);
  return group.length <= 4 && !_.isNaN(number);
};

// console.log();
// console.log(isValidGroup('2a03'));

const isValidIPv6 = (ip) => {
  if (ip.indexOf('::') !== ip.lastIndexOf('::')) {
    return false;
  }

  const isShort = ip.includes('::');
  const groups = ip.split('::')
    .filter((group) => group !== '')
    .flatMap((part) => part.split(':'));
  const length = isShort ? groups.length + 1 : groups.length;

  if ((!isShort && length < 8) || length > 8) {
    return false;
  }

  return groups.every(isValidGroup);
};
// ------------------------------------------

// ======================================

// ============= TEACHER =====================
// const isValidGroup = (group) => {
//   const number = Number(`0x${group}`);
//   return group.length <= 4 && !_.isNaN(number);
// };

// const isValidIPv6 = (ip) => {
//   if (ip.indexOf('::') !== ip.lastIndexOf('::')) {
//     return false;
//   }

//   const isShort = ip.includes('::');
//   const groups = ip.split('::')
//     .filter((group) => group !== '')
//     .flatMap((part) => part.split(':'));

//   // Вот это `groups.length + 1 ` делается для дальнейшей проверке (см. ближайший `if`).
//   // Если у нас сокращённая IPv6 запись, то подразумевается, что опущен как минимум
//   // один кусочек адреса, а значит кусочков адреса ожидается меньше восьми.
//   // Поэтому мы и проверяем: «Если запись сокращённая, то увеличив длину массива на единицу
//   // мы ожидаем получить число не больше восьми»
//   const length = isShort ? groups.length + 1 : groups.length;

//   // return isShort;
//   // return groups;
//   // Количество групп (кусочков адреса) всегда 8 шт.,
//   // кроме случаев, когда адрес записан в сокращённой форме:
//   // >> Полная форма:      FF01:0:0:0:0:0:0:101
//   // >> Сокращённая форма: FF01::101
//   if ((!isShort && length < 8) || length > 8) {
//     return false;
//   }

//   return groups.every(isValidGroup);
// };
// ===========================================
console.log('>> TRUE: ' + '\n');

// console.log(isValidIPv6('1::1:2:3:a:::b'));
// console.log()
// console.log()

console.log(isValidIPv6('2a03:2880:2130:cf05:face:b00c:0:1'));
console.log(isValidIPv6('::b36:3c:f0:7:937'));
console.log(isValidIPv6('000::B36:3C:00F0:7:937'));
console.log(isValidIPv6('0B0:0F09:7f05:e2F3:0D:0:e0:7000'));
console.log(isValidIPv6('10:d3:2d06:24:400c:5ee0:be:3d'));
console.log(isValidIPv6('::'));
console.log(isValidIPv6('::1'));
console.log(isValidIPv6('1::1'));
console.log(isValidIPv6('2a02:cb41:0:0:0:0:0:7'));
console.log(isValidIPv6('e:6c::647:50:0:7'));
console.log(isValidIPv6('04:07A1:1404:0A0:A:080F:080:0'));
console.log(isValidIPv6('1001:208:67:4f00:e3::2c6:0'));

console.log(isValidIPv6('10:d3:2d06:24:400c:5ee0:be:3d'));
console.log(isValidIPv6('0B0:0F09:7f05:e2F3:0D:0:e0:7000'));
console.log(isValidIPv6('000::B36:3C:00F0:7:937'));
console.log(isValidIPv6('::1'));
console.log(isValidIPv6('1001:208:67:4f00:e3::2c6:0'));

console.log('\n\n');

console.log('>> FALSE: ' + '\n');

console.log(isValidIPv6('2607:G8B0:4010:801::1004'));
console.log(isValidIPv6('2001::0:64::2'));
console.log(isValidIPv6('2001'));
console.log(isValidIPv6('2001:::'));
console.log(isValidIPv6('2.001::'));
console.log(isValidIPv6('9f8:0:69S0:9:9:d9a:672:f90d'));
console.log(isValidIPv6('e1b6:1daf9:6:0:c50:8c4:90e:e'));
console.log(isValidIPv6('C00D::a2195:2EA9:096'));
console.log(isValidIPv6('d:0:4:a004:3b96:10b0:10:800:15'));
console.log(isValidIPv6('5c03:0:a::b825:d690:4ce0:2831:acf0'));
console.log(isValidIPv6(':1::1'));
console.log(isValidIPv6('1::1:'));
console.log(isValidIPv6('2a02:0cb41:0:0:0:0:0:7'));

console.log(isValidIPv6('2607:G8B0:4010:801::1004'));
console.log(isValidIPv6('2.001::'));
console.log(isValidIPv6('9f8:0:69S0:9:9:d9a:672:f90d'));
