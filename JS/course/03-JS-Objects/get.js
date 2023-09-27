/*

Функция получает объект и массив

С помощью Optional Chaining `?.` и Nullish Coalescing (оператор нулевого слияния) `??`
  - проверяем наличие ключа
  - заменяем вывод, если ключа нет: вместо `undefined` возвращаем `null`

псевдокод: все значения из `array` надо в качестве ключей подставить к `obj`
и вернуть либо значение указанного ключа, либо null, если такого ключа нет
result = obj?.array[0]?.arr[1]?.array[n] ?? null;

*/

// const get = (obj, array) => {

//   let result = obj;

//   for (const key of array) {
//     if (Object.hasOwn(result, key)) {
//       result = result[key];
//     } else {
//       return null;
//     }
//   }

//   return result;
// };

// =============== TEACHER ====================
const get = (data, keys) => {
  let currentState = data;

  for (const key of keys) {
    const hasProperty = Object.hasOwn(currentState, key);
    if (!hasProperty) {
      return null;
    }
    currentState = currentState[key];
  }

  return currentState;
};
// ============================================

const data = {
  user: 'ubuntu',
  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
      active: false,
    },
  },
};

console.log(get(data, ['undefined'])); // null
console.log();

console.log(get(data, ['user'])); // 'ubuntu'
console.log();

console.log(get(data, ['user', 'ubuntu'])); // null
console.log();

console.log(get(data, ['hosts', 1, 'name'])); // 'web2'
console.log();

console.log(get(data, ['hosts', 0])); // { name: 'web1' }
console.log();

console.log(get(data, ['hosts', 1, null])); // 3
console.log();

console.log(get(data, ['hosts', 1, 'active'])); // false
console.log();

console.log(get(data, [])); // { user: 'ubuntu', hosts: { 0: { name: 'web1' }, 1: { name: 'web2', null: 3, active: false }}}
