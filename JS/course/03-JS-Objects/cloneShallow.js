/*

# Задача

Реализуйте и экспортируйте по умолчанию функцию, которая выполняет поверхностное копирование объектов.
Реализуйте этот функционал самостоятельно, не используя функцию Object.assign().
Для решения этой задачи, нужно последовательно обойти исходный объект и скопировать его данные в другой объект.

# Логика

Превращаем ключи и значения объекта в массив с помощью Object.entries(obj1)
Делаем обход массива с помощью for..of через деструктуризацию: for (const [key, value] of array)
На каждом шаге:
  object[key] = value

*/

const cloneShallow = (data) => {
  const dataEntries = Object.entries(data);
  const copiedObject = {};

  for (const [key, value] of dataEntries) {
    copiedObject[key] = value;
  }

  return copiedObject;
};

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
const result = cloneShallow(data);

data.key2.key = 'changedIn-DATA';
result.key = 'changedIn-RESULT';

console.log('>> data:');
console.log(data);

// console.log();

// console.log('>> result:');
// console.log(result);

// console.log();

// console.log(`expected true: ${result.key2 !== data.key2}`); // true
// console.log(`expected true: ${result.key2.innerKey !== data.key2.innerKey}`); // true

// console.log(data === result); // false

// console.log();

// console.log(data['key2']['key']);
// console.log(result['key']);
// console.log(data['key'] === result['key']);                 // true
// console.log(data['key2']['key'] === result['key2']['key']); // true
