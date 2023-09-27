const crc32 = require('crc-32');

// Задача
/*

Реализуйте и экспортируйте набор функций для работы со словарём, построенным на хеш-таблице.
Для простоты, наша реализация не поддерживает разрешение коллизий.

По сути в этом задании надо реализовать объекты. По понятным причинам использовать объекты для создания объектов нельзя.
Представьте что в языке объектов нет и мы их хотим добавить.

make() — создаёт новый пустой словарь и возвращает его
set(map, key, value) — устанавливает в словарь значение по ключу. Работает и для создания и для изменения.

Функция возвращает true, если удалось установить значение. При возникновении коллизии, функция никак не меняет словарь и возвращает false

get(map, key, defaultValue = null) — возвращает значение указанного ключа. Параметр defaultValue — значение,
которое функция возвращает, если в словаре нет ключа (по умолчанию равно null).
При возникновении коллизии функция также возвращает значение по умолчанию

Функции set() и get() принимают первым параметром словарь.
Передача идёт по ссылке, поэтому set() может изменить его напрямую.

import { make, set, get } from './map.js';

const map = make();
let result = get(map, 'key');
console.log(result); // => null

result = get(map, 'key', 'default_value');
console.log(result); // => "default_value"

set(map, 'key2', 'value2');
result = get(map, 'key2');
console.log(result); // => "value2"

# Подсказки
Для внутреннего представления словаря, используйте массив, где индекс содержит хеш записи, а значение — key и value (их можно упаковать в массив): хэш-код: [ключ, значение]
Коллизии возникают, когда хеш одинаковый, а ключи разные.
Документация crc-32: https://github.com/SheetJS/js-crc32

*/

/*

Общая логика такая

Мы создаём логику хеш-таблицы:
  - принимаем элемент и на его основе создаём уникальное число
  - это число используем как индекс
  - по этому индексу в индексированный (упорядоченный) массив заносим подмассив: наш элемент (key) и его значение (value)
  - при обращении к этому элементу считывается его индекс и возвращается пара: сам этот элемент (key) и связанное с ним значение (value)

*/

// ================= EXPLAIN ========================================

// make() – это как:
// const myObj = {}

// set(map, 'key2', 'value2'), где map = make(). Функция set() это как:
// myObj['key2'] = 'value2';

// get(map, 'key', 'default_value'), где map = make(). Функция get() это как:
// myObj['key'] // в JS дефолтно возвращается `undefined`

// ===================================================================

const make = () => [];

const map = make();

const getIndex = (key) => {
  const hash = crc32.str(key);
  const index = Math.abs(hash) % 1000;

  return index;
};

// const hasCollision = (map, key) => {
//   const index = getIndex(key);
//   if (!map[index]) {
//     return false;
//   }
//   const [currentKey] = map[index];

//   return currentKey !== key;
// };

const hasCollision = (map, key) => {
  const index = getIndex(key);
  const [currentKey] = map[index];
  return currentKey !== key;
};

// ============= PLAYGROUND ================================

// map[getIndex('a')] = ['a'];
// // console.log(map);
// const testKey = map[0];

// const test = (index) => {
//   map[index] = ['c', 'd'];
//   return;
// };

// test(3);

// console.log(`>> map:`);
// console.log(map);
// console.log();

// console.log(`>> testKey (which is map[0], expected ['a']):`);
// console.log(testKey);
// console.log();

// // console.log(`>> testKey === ['a']:`);
// // console.log(testKey === ['a']);
// // console.log();

// // console.log(testKey === testKey);

// // console.log('>> getIndex("two"): ' + getIndex('two'));
// // console.log();

// console.log(`hasCollision: ${hasCollision(map, 'a')}`)
// console.log();

// ===========================================================

const set = (map, key, value) => {
  const index = getIndex(key);

  // if(map[index]) означает: есть ли в нашем массиве запись по этому индексу?

  // if(hasCollision(map, key)) означает: совпадает ли значение
  // переданного в функцию set() аргумента `key`
  // со значением `key`, находящимся по этому индексу?
  if (map[index] && hasCollision(map, key)) {
    return false;
  }
  map[index] = [key, value];

  return true;
};

// ============== TESTS set() ====================
// console.log(set(map, 'one', 'valueOne'));
// console.log(set(map, 'two', 'valueTwo'));
// set(map, 'three', 'valueThree');
// set(map, 'four', 'valueFour');

// console.log('should be empty array – `map`: ');
// console.log(map);
// console.log();

// console.log('first time set(map, two, ...), expect true: ' + '\n' + set(map, 'two', 'valueTwo'));

// console.log('second  time set(map, two, ...), expect false: ' + '\n' + set(map, 'two', '!!!should-not-appear'));
// console.log();

// set(map, 'three', 'valueThree');
// set(map, 'three', '!!!!! Wrong Value');

// console.log(map);
// =========================================

const get = (map, key, defaultValue = null) => {
  const index = getIndex(key);

  if (!map[index] || hasCollision(map, key)) {
    return defaultValue;
  }
  const [, value] = map[index];

  return value;
};

// ============== TESTS get() ====================
// console.log(get(map, 'one')); // null
// console.log(get(map, 'two')); // valueTwo
// console.log(get(map, 'three')); // valueThree
// =========================================

// ========= FINAL TESTS ======================
// const map = make();
let result = get(map, 'key');
console.log(result); // => null

result = get(map, 'key', 'default_value');
console.log(result); // => "default_value"

set(map, 'key2', 'value2');
result = get(map, 'key2');
console.log(result); // => "value2"

set(map, 'key2', 'another value');
const result5 = get(map, 'key2');
console.log(result5); // => 'another value';
// ===========================================

console.log();
console.log(map);
