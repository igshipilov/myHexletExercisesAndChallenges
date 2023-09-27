import _ from 'lodash';

// Задача
/*

Реализуйте и экспортируйте по умолчанию функцию, которая выполняет глубокое копирование объектов.

import cloneDeep from '../objects.js';

const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

// result имеет такую же структуру, как и data
const result = cloneDeep(data);

// Но внутри другие объекты
result.key2 !== data.key2; // true
result.key2.innerKey !== data.key2.innerKey; // true

Для решения этой задачи, нужно последовательно обойти исходный объект и скопировать его данные в другой объект.
Если значением какого-то свойства является объект, то нужно рекурсивно запустить реализованную функцию.

*/

const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

console.log('==============');

// ============ JSON SOLUTION ==================
// const cloneDeep = (object) => {
//   const result = JSON.parse(JSON.stringify(object));

//   return result;
// };
// =============================================

// ========= WORKING SOLUTION 1 ==========
// const cloneDeep = (object) => {
//   const clonedObject = {};
//   const entries = Object.entries(object);
//   for (const [key, value] of entries) {
//     if (_.isObject(value)) {
//       clonedObject[key] = cloneDeep(value);
//     }
//     clonedObject[key] = value;
//   }

//   return clonedObject;
// };
// ========================================

// ========= WORKING SOLUTION 2 ==========
const cloneDeep = (object) => {
  const result = {};
  const entries = Object.entries(object);
  for (const [key, value] of entries) {
    result[key] = _.isObject(value) ? cloneDeep(value) : value;
  }

  return result;
};
// ========================================

// ================ TEST SOLUTION ================
// const cloneDeep = (object) => Object.assign({}, data);
// const cloneDeep = {...data};
// ===============================================

// result имеет такую же структуру, как и data
// const result = cloneDeep(data);
const result = cloneDeep;

result.key = 'changedIn-RESULT';
data.key2.key = 'changedIn-DATA';

console.log('>> data:');
console.log(data);

console.log();

console.log('>> result:');
console.log(result);

// Но внутри другие объекты
console.log(`expected true: ${result.key2 !== data.key2}`); // true
console.log(`expected true: ${result.key2.innerKey !== data.key2.innerKey}`); // true
