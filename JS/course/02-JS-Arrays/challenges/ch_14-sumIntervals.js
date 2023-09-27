/*

# Алгоритм

Условие: у нас на входе всегда массив с подмассивом(ами)

Создаём пустой стек
Перебираем входной массив и каждый подмассив в нём
Наполняем стек только теми числами, которых в нём ещё нет
result(stack.length)

*/

const sumIntervals = (arr) => {
  const size = arr.length;
  if (size === 0) {
    return null;
  }
  if (size === 1) {
    return arr[0][1] - arr[0][0];
  }

  const stack = [];
  for (let i = 0; i < size; i += 1) {
    for (let value = arr[i][0]; value < arr[i][1]; value += 1) {
      if (!stack.includes(value)) {
        stack.push(value);
      }
    }
  } return stack.length;
};

console.log(sumIntervals([[5, 5]])); // 0
console.log(sumIntervals([[7, 7], [6, 6]])); // 0
console.log(sumIntervals([[3, 10]])); // 7
console.log(sumIntervals([[-100, 0]])); // 100

console.log(sumIntervals([
  [-4, 4],
  [1, 3],
]));
// 8

console.log(sumIntervals([
  [1, 2],
  [11, 12],
]));
// 2

console.log(sumIntervals([
  [1, 9],
  [7, 12],
  [3, 4],
]));
// 11

console.log(sumIntervals([
  [1, 5],
  [-30, 19],
  [1, 7],
  [16, 19],
  [5, 100],
]));
// 130
