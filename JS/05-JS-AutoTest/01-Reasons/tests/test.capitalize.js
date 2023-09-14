import { capitalize } from "../src/capitalize.js";

if (capitalize('hello') !== 'Hello') {
  throw new Error('Функция работает неверно!')
};

if (capitalize('') !== '') {
  throw new Errow('Функция работает неверно!');
}

if (capitalize('hello') !== 'hellOo') {
  throw new Error('testing my !!!error');
}

console.log('Все тесты пройдены!')