import _ from 'lodash';

// https://ru.hexlet.io/challenges/js_trees_stringify_exercise/instance

/*

ЗАДАЧА

Реализуйте и экспортируйте по умолчанию функцию, похожую на JSON.stringify(), но со следующими отличиями:

  - ключи и строковые значения должны быть без кавычек
  - каждая строка заканчивается самим значением, без запятой

Не используйте в своём решении саму функцию JSON.stringify().

АЛГОРИТМ

Преобразовать каждый объект в массив с подмассивами, где каждый подмассив – пара ['ключ', 'значение']
  const keyValue = Object.entries(data);

Считать / накапливать значение глубины вложенности,
использовать это значение для указания количества отступов с помощью
`str.repeat(depth)`

X -- НЕТ -- X
Конвертировать полученный результат обратно в объект...?
const convert = (list) => list.reduce((acc, node) => {
  const [key, value] = node;
  const newValue = Array.isArray(value) ? convert(value) : value;
  return { ...acc, [key]: newValue };
}, {});
------------ ведь нам нужно на выходе получить СТРОКУ ------------------

.reduce((acc, child) => {...}, [])

  // Внутри .reduce
  line = `${key}: ${value}`
  indent = spacer.repeat(count);
  acc  = `${acc}${indent}${line}`

  Если `value` массив, то рекурсивно применить к нему эту же функцию.

result.unshift('{').push('}').join('\n')

*/

const data = { hello: 'world', is: true, nested: { count: 5 } };

// ------- SIMPLIFIED, but it works ---------------
// const stringify = (data) => {
//   const keyValue = Object.entries(data);

//   const iter = (node) => node.map((element) => {
//     const [key, value] = element;
//     const result = _.isPlainObject(value) ? stringify(value) : `${key}: ${value}`;

//     return result;
//   });

//   return iter (keyValue);
// };

// const makeObjectToArray = (data) => {
//   const keyValue = Object.entries(data);

//   const iter = (node) => node.map((element) => {
//     const [key, value] = element;
//     const isValuePlainObject = _.isPlainObject(value); // debug
//     const result = _.isPlainObject(value)
//       ? `${key}: ${makeObjectToArray(value)}`
//       : `${key}: ${value}`;

//     return result;
//   });

//   return iter (keyValue);
// };

// const makeObjectToArray = (data) => {
//   if (Array.isArray(data)) {
//     return data;
//   }

//   const keyValue = Object.entries(data);

//   const iter = (node) => node.map((element) => {
//     const [key, value] = element;
//     const isValuePlainObject = _.isPlainObject(value); // debug
//     const result = _.isPlainObject(value)
//       ? [key, makeObjectToArray(value)]
//       : element;

//     return result.flat();
//   });

//   return iter (keyValue);
// };

// --- DEBUG ---
// const objToArr = makeObjectToArray(data);
// console.log(`>> check inner (third element):`);
// console.log(objToArr[2]);
// console.log(`\n\n`);
// ------------

// const stringify = (data, replacer = ' ', spaceCount = 1) => {
//   const arr = makeObjectToArray(data);
//   // console.log('>> arr:');
//   // console.log(arr);
//   // console.log(`\n\n`);

//   const iter = (node, depth, acc) => node.map((child) => {
//     const [key, value] = child;
//     const currentString = `${acc}${replacer.repeat(spaceCount)}${key}: ${value}`;

//     if (Array.isArray(value)) {
//       return iter(value, depth + 1, currentString);
//     }

//     return currentString;
//     return currentString.join('\n'); // метод `.join()` работает только с массивом
//   });

//   return iter(arr, 1, '');

// };

// const stringify = (data, replacer = ' ', spaceCount = 1) => {
//   const arr = makeObjectToArray(data);
//   // console.log('>> arr:');
//   // console.log(arr);
//   // console.log(`\n\n`);

//   const iter = (node, depth, acc) => node.map((child) => {
//     const [key, value] = child;
//     const currentString = Array.isArray(value)
//       ? `${acc}${replacer.repeat(spaceCount)}${key}: ${stringify(value)}`
//       : `${acc}${replacer.repeat(spaceCount)}${key}: ${value}`;

//     // if (Array.isArray(value)) {
//     //   return iter(value, depth + 1, currentString);
//     // }

//     return currentString;
//     return currentString.join('\n'); // метод `.join()` работает только с массивом
//   });

//   return iter(arr, 1, '');

// };

// const stringify = (data, replacer = ' ', spaceCount = 1) => {
//   const arr = makeObjectToArray(data);
//   // console.log('>> arr:');
//   // console.log(arr);
//   // console.log(`\n\n`);

//   const iter = (node, depth, acc) => node.map((child) => {
//     const [key, value] = child;
//     if (!Array.isArray(value)) {
//       return `${key}: ${value}`;
//     }

//     const result = iter(value, depth + 1, '');

//     return result;

//     const currentString = Array.isArray(value)
//       ? `${acc}${replacer.repeat(spaceCount)}${key}: ${stringify(value)}`
//       : `${acc}${replacer.repeat(spaceCount)}${key}: ${value}`;

//     if (Array.isArray(value)) {
//       return iter(value, depth + 1, currentString);
//     }

//     return currentString;
//     return currentString.join('\n'); // метод `.join()` работает только с массивом
//   });

//   return iter(arr, 1, '');

// };

const test0 = 0;

// --- РАБОТАЕТ ДЛЯ ОДНОГО МАССИВА ---------
const test = (arr, replacer = '|-', spaceCount = 0) => {
  const iter = (node, depth) => {
    const [key, value] = node;

    if (Array.isArray(value)) {
      return `${key}: {\n${replacer.repeat(depth)}${test(value, replacer, spaceCount + 1)}\n${replacer.repeat(depth - 1)}}`;
    }

    return `${key}: ${value}`;
  };

  return `${iter(arr, spaceCount + 1)}`;
};
// ----------------------------------------

const test1 = 0;

// --- ПОЧТИ РАБОЧАЯ -------
// Делаем `.join('\n')`, превращая каждую запятую в начало новой строки.

const stringify = (data, replacer = '|-', spaceCount = 0) => {
  const iter = (node, depth) => {
    const arr = Object.entries(node);
    // console.log(arr)

    return arr.map((child) => {
      const [key, value] = child;
      const indent = replacer.repeat(depth);

      const isValuePlainObject = _.isPlainObject(value); // debug
      if (_.isPlainObject(value)) {
        const indentsOnThisRow = indent; // debug
        return `\n${indent}${key}: ${stringify(value, replacer, spaceCount + spaceCount)}\n${indent}}`;
      }

      return `\n${indent}${key}: ${value}`;
    });
  };
  const result = `${iter(data, spaceCount)}`;

  // return result;
  return `{${result.replaceAll(',', '')}`;
};

const test2 = 0;

// const stringify = (data, replacer = '|-', spaceCount = 0) => {

//   const iter = (node, depth) => {
//     const arr = Object.entries(node);
//     // console.log(arr.join('\n'))

//     return arr.reduce((acc, child) => {
//       const [key, value] = child;
//       const indent = replacer.repeat(depth);

//       const isValuePlainObject = _.isPlainObject(value); // debug
//       if (_.isPlainObject(value)) {

//         const indentsOnThisRow = indent; // debug

//         const result = `${indent}${acc}${key}: ${stringify(value, replacer, spaceCount + spaceCount)}`
//         return result
//       }

//       return `${indent}${acc}${key}: ${value},`;
//     }, '');

//   }
//   const result = `${iter(data, spaceCount)}`;

//   return result.split(',').join('\n');
//   return result.join('\n');
//   // return `{${result}${replacer.repeat(spaceCount - 2)}}`;
// };

const test3 = 0;

// const stringify = (data, replacer = '|-', spaceCount = 0) => {
//   const iter = (node, depth) => {
//     const arr = Object.entries(node);
//     const [key, value] = arr;

//     if (Array.isArray(value)) {
//       return `${key}: {\n${replacer.repeat(depth)}${stringify(value, replacer, spaceCount + 1)}\n${replacer.repeat(depth - 1)}}`
//     }

//     return `${key}: ${value}`;
//   };

//   return `${iter(data, spaceCount + 1)}`
// };

const test4 = 0;

// const stringifyOneArr = (data, replacer = '|-', spaceCount = 0) => {
//   const iter = (node, depth) => {
//     const [key, value] = node;

//     if (Array.isArray(value)) {
//       return `${key}: {\n${replacer.repeat(depth)}${stringifyOneArr(value, replacer, spaceCount + 1)}\n${replacer.repeat(depth - 1)}}`
//     }

//     return `${key}: ${value}`;
//   };

//   return `${iter(data, spaceCount + 1)}`
// };

// const stringify = (data, replacer = '|-', spaceCount = 0) => {
//   const arr = Object.entries(data);

//   const result = arr.map((child) => stringifyOneArr(child, replacer, spaceCount));

//   return result;
//   return result.join('\n');
// };

// const stringify = (data, replacer = '|-', spaceCount = 0) => {

//   const iter = (node, depth) => {
//     const arr = Object.entries(node);
//     const br = '\n';

//     return arr.reduce((acc, child) => {
//       const [key, value] = child;
//       const indent = replacer.repeat(depth);

//       const isValuePlainObject = _.isPlainObject(value); // debug
//       if (_.isPlainObject(value)) {

//         const indentsOnThisRow = indent; // debug
//         const line = `${indent}${key}:${br}${stringify(value, replacer, spaceCount * depth)}`;
//         acc.push(line);

//         return acc;
//       }

//       acc.push(`${indent}${key}: ${value}`);

//       return acc
//     }, []);

//   }
//   const result = iter(data, spaceCount).join('\n');;
//   // result
//   //   .unshift('{')
//   // result
//   //   .push('}')
//   // result
//     // .join('\n');

//   return result;

// };

// export default stringify;

// --- DEBUG ---
// console.log(`>> makeObjectToArray:`);
// console.log(makeObjectToArray(data));
// console.log(`\n`)

// console.log(stringifyOneArr(['one', ['two', ['three', 'four']]]));
// console.log(`\n\n`);

// console.log(stringify(['one', ['two', ['three', 'four']]]));
// console.log(`\n\n`);

// console.log(stringify(['one', 'two']));
// console.log(`\n\n`);

// console.log(stringify(data));
// console.log(`\n\n`)
// ------------

// console.log(stringify(data)); // то же самое что stringify(data, ' ', 1);
// console.log(`\n\n`);

// {
//  hello: world
//  is: true
//  nested: {
//   count: 5
//  }
// }

console.log(stringify(data, '|-', 2));
// Символ, переданный вторым аргументом повторяется столько раз, сколько указано третьим аргументом.
// {
// |-|-hello: world
// |-|-is: true
// |-|-nested: {
// |-|-|-|-count: 5
// |-|-}
// }

// console.log(`\n\n`)

// const { hello, value } = data;
// console.log(hello);
// console.log(value);

// const keyValue = Object.entries(data);
// console.log(keyValue)
