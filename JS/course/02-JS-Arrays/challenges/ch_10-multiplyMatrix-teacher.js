const multiplyMatrix = (matrixA, matrixB) => {
  const rowsCountA = matrixA.length;
  const rowsCountB = matrixB.length;
  const [firstRowB] = matrixB;
  const columnsCountB = firstRowB.length;
  const matrixC = [];

  for (let row = 0; row < rowsCountA; row += 1) { // кол-во. строк в первой матрице
    matrixC[row] = [];
    for (let column = 0; column < columnsCountB; column += 1) { // кол-во. столбцов во второй матрице
      let sum = 0;
      for (let i = 0; i < rowsCountB; i += 1) {
        sum += matrixA[row][i] * matrixB[i][column];
      }
      // матрица-результат имеет размер: кол-во. строк как в первой, кол-во. столбцов как во второй:
      // матрица размером M×N умножить на матрицу размером N×K равно матрица размером M×K
      matrixC[row][column] = sum;
    }
  }

  return matrixC;
};

const matrixC = [
  [2, 5],
  [6, 7],
  [1, 8],
];
const matrixD = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(multiplyMatrix(matrixC, matrixD));
// [
//     [22, 29, 36]
//     [34, 47, 60]
//     [33, 42, 51]
// ]
