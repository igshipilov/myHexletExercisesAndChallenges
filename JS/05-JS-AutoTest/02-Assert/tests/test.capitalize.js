import { strict as assert } from "node:assert";
import { capitalize } from "../src/capitalize.js";

assert(capitalize('hello') === 'Hello');
// if (capitalize('hello') !== 'Hello') {
//   throw new Error('Функция работает неверно!')
// };

assert(capitalize('') === '');
// if (capitalize('') !== '') {
//   throw new Errow('Функция работает неверно!');
// }

// Специально неправильный `assert`, чтобы посмотреть
// на поведение тестов в случае ошибки:
// assert(capitalize(''), 'W');

// Специально сломанный тест, чтобы проверить работу assert.equal
assert.equal(capitalize('t'), 'W');

console.log('Все тесты пройдены!')