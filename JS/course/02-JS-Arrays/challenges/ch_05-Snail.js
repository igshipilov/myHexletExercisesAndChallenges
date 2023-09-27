/*

# Алгоритм (подсказал преподаватель в чате)

Берем первый ряд матрицы
Вращаем оставшееся
Берем первый ряд
Вращаем
и тд. до конца матрицы
Все что берем, складываем в массив результатов и в конце через flat() раскрываем все

Условие рекурсии
if (длина result = длина arr.flat()) { return рекурсия }, else { return result }

*/

/*
const buildSnailPath = (arr) => {
  const rows = arr.length;
  const columns = arr[0].length;
  let result = [];
  let rotated = arr;

  // for (let column = 0; column < columns; column += 1) {
    for (let column = 0; column < rotated[0].length; column += 1) {
      const currentElement = rotated[0][column];
      result.push(currentElement);
      if (result.flat().length < arr.flat().length) {
        buildSnailPath(rotated);
      }
    }
    rotated = rotateMatrix(arr);
  // }

  return result.flat();
};
*/

// Решение из Сети
// https://hellodevworld.com/365-days-of-coding/snail-array-challenge-solution-javascript
/*
const snail = (array) =>{
  let finalArray = []
  while(array.length){
    finalArray.push(...array.shift())
    for (var i = 0; i < array.length; i++){
      finalArray.push(array[i].pop())
    }

    // spread-оператор ...(array.) вытаскивает подмассив на уровень выше
    finalArray.push(...(array.pop() || []).reverse())
    console.log(array);

    // заполняем finalArray, беря данные снизу вверх из левой колонки исходного array
    for (var i = array.length -1; i >= 0; i--){
      finalArray.push(array[i].shift())
    }
  }
  return finalArray
}
*/

const rotateMatrix = (matrix, direction = 'left') => {
  if (matrix.length === 0) {
    return [];
  }
  const rowsCount = matrix.length;
  const [firstRow] = matrix;
  const columnsCount = firstRow.length;
  const rotated = [];

  for (let row = 0; row < columnsCount; row += 1) {
    rotated[row] = [];
    for (let column = 0; column < rowsCount; column += 1) {
      rotated[row][column] = direction === 'left'
        ? matrix[column][columnsCount - 1 - row]
        : matrix[rowsCount - column - 1][row];
    }
  } return rotated;
};

// const rotateLeft = (matrix) => rotateMatrix(matrix, 'left');
// const rotateRight = (matrix) => rotateMatrix(matrix, 'right');

// const test = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 0, 1, 2],
// ];

// console.log(test.flat());
// console.log(rotateLeft(test));
// [
//   [4, 8, 2],
//   [3, 7, 1],
//   [2, 6, 0],
//   [1, 5, 9],
// ]

// const buildSnailPath = (arr) => {
//   let workingArray = [...arr]; // copy array, like let workingArray = arr.slice();
//   const result = [];

//   while (workingArray.length) {
//     result.push(...workingArray.shift());
//     workingArray = rotateMatrix(workingArray);
//   }

//   return result;
// };

// teacher's 2
/*
const buildSnailPath = (arr) => {

  if (arr.length === 0) {
    return [];
  }

  const [head, ...tail] = arr;
  return [head, buildSnailPath(rotateMatrix(tail))].flat();

};
*/

const matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log(buildSnailPath(matrix2));

// const popped = matrix2.pop();
// console.log(matrix2.shift());
// console.log(matrix2);
