// https://ru.hexlet.io/challenges/js_trees_convertor_exercise/instance

/*

Реализуйте и экспортируйте по умолчанию функцию,которая принимает на вход массив определённой структуры
и возвращает объект, полученный из этого массива.

Массив устроен таким образом, что с помощью него можно представлять ассоциативные массивы.
Каждое значение внутри него — это массив из двух элементов, где первый элемент — ключ,
а второй — значение. В свою очередь, если значение тоже является массивом,
то считается, что это вложенное представление ассоциативного массива.

Другими словами, любой массив внутри исходного массива всегда рассматривается как данные, которые нужно конвертировать в объект.

*/
// ============= MY =====================

// const convert = (list) => list.reduce((acc, element) => {
//   const [key, value] = element;
//   const result = Array.isArray(value)
//     ? { ...acc, [key]: convert(value) }
//     : { ...acc, [key]: value };

//   return result;
// }, {});

// ======================================

// ============= TEACHER =====================

const convert = (list) => list.reduce((acc, node) => {
  const [key, value] = node;
  const newValue = Array.isArray(value) ? convert(value) : value;
  return { ...acc, [key]: newValue };
}, {});

// ===========================================

export default convert;

// console.log(convert([])); // {}
// console.log(convert([['key', 'value']])); // { key: 'value' }
// console.log(convert([['key', 'value'], ['key2', 'value2']])); // { key: 'value', key2: 'value2' }

console.log(convert([
  ['key', [['key2', 'anotherValue']]],
  ['key2', 'value2'],
]));
// { key: { key2: 'anotherValue' }, key2: 'value2' }
