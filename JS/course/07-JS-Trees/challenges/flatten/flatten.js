// https://ru.hexlet.io/challenges/js_trees_flatten_exercise/instance

// Реализуйте и экспортируйте по умолчанию функцию, которая делает плоским вложенный массив.
// Для решения задачи нельзя использовать готовые методы для выравнивания массивов.

/*

АЛГОРИТМ

Смотрим каждый элемент массива
  - Если текущий элемент не массив, то заносим его в аккумулятор
  - иначе применяем к нему текущую функцию, в которую передаём:
    -- текущий элемент как итерируемый массив
    -- аккумулятор

*/
// ============= MY =====================

// const flatten = (list) => {
//   const iter = (currentElement, newList) => {
//     currentElement.map((key) => (Array.isArray(key) ? iter(key, newList) : newList.push(key)));
//     return newList;
//   };

//   return iter(list, []);
// };

// ======================================

// ============= TEACHER =====================
const flatten = (list) => list.reduce((acc, element) => {
  const result = (Array.isArray(element) ? [...acc, ...flatten(element)] : [...acc, element]);
  return result;
}, []);

// ===========================================

export default flatten;

const list = [1, 2, [3, 5], [[4, 3], 2]];
console.log(flatten(list)); // [1, 2, 3, 5, 4, 3, 2]

// const [key, value] = list;
// console.log(key);
// console.log(value);
