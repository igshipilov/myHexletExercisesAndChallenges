/*

rotateLeft

Новый массив наполняется элементами с конца первой строки

Начинаем наполнять следующую строку, когда счётчик доходит до количества строк
в исходной матрице: если у нас три строки, то счётчик i < 3

rotateRight

Новый массив наполняется элементами с начала последней строки

*/

// my
/*
const rotateLeft = (matrix) => {
  const size = matrix.length;
  const inSize = matrix[0].length;
  const result = [];

  for (let el = inSize - 1; el >= 0; el -= 1) {
    const rowArray = [];
    for (let row = 0; row < size; row += 1) {
      rowArray.push(matrix[row][el]);
    } result.push(rowArray);
    }
    return result;
};

const rotateRight = (matrix) => {
  const size = matrix.length;
  const inSize = matrix[0].length;
  const result = [];

  for (let el = 0; el < inSize; el += 1) {
    const rowArray = [];
    for (let row = size - 1; row >= 0; row -= 1) {
      rowArray.push(matrix[row][el]);
    } result.push(rowArray);
    }
    return result;
};
*/

// teacher's
const rotateMatrix = (matrix, direction = 'left') => {
  const rowsCount = matrix.length;
  const [firstRow] = matrix;
  const columnsCount = firstRow.length;
  const rotated = [];

  // left rotated:
  // row[0] = [matrix[0][3], matrix[1][3], matrix[2][3]];
  // row[1] = [matrix[0][2], matrix[1][2], matrix[2][2]];
  // row[2] = [matrix[0][1], matrix[1][1], matrix[2][1]];
  // row[3] = [matrix[0][0], matrix[1][0], matrix[2][0]];
  for (let row = 0; row < columnsCount; row += 1) {
    rotated[row] = [];
    for (let column = 0; column < rowsCount; column += 1) {
      rotated[row][column] = direction === 'left'
        ? matrix[column][columnsCount - 1 - row]
        : matrix[rowsCount - column - 1][row];
    }
  } return rotated;
};

const rotateLeft = (matrix) => rotateMatrix(matrix, 'left');
const rotateRight = (matrix) => rotateMatrix(matrix, 'right');

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 0, 1, 2],
];

// console.log(rotateMatrix(matrix));

console.log(rotateLeft(matrix));
// console.log(matrix[0].length);
// [
//   [4, 8, 2],
//   [3, 7, 1],
//   [2, 6, 0],
//   [1, 5, 9],
// ]

console.log(rotateRight(matrix));
console.table(rotateRight(matrix));
// [
//   [9, 5, 1],
//   [0, 6, 2],
//   [1, 7, 3],
//   [2, 8, 4],
// ]

// Уровни вложенности
// const test = ['I will be replaced'];
// test[0] = ['second 0'];
// test[1] = ['second 1'];
// test[2] = ['second 2'];

// test[0][0] = 'a', 'b', 'c', 'd';
// test[0][1] = 'f';
// test[0][2] = 'g';

// test[1][0] = 'sec check 0';
// test[1][1] = 'sec check 1';
// test[1][2] = 'sec check 2';

// console.log(test);
// console.log(test.length);
