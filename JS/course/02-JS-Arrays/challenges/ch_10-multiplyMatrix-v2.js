/*
Пример заполнения одной строки в result:

    matrixFirst[0][0] * matrixSecond[0][0]
    matrixFirst[0][1] * matrixSecond[1][0]
    matrixFirst[0][2] * matrixSecond[2][0]
    sum(multResult)

    matrixFirst[0][0] * matrixSecond[0][1]
    matrixFirst[0][1] * matrixSecond[1][1]
    matrixFirst[0][2] * matrixSecond[2][1]
    sum(multResult)

    matrixFirst[0][0] * matrixSecond[0][2]
    matrixFirst[0][1] * matrixSecond[1][2]
    matrixFirst[0][2] * matrixSecond[2][2]
    sum(multResult)

    mainRow.push(singleRow)

*/

const multiplyMatrix = (matrixA, matrixB) => {
  const result = [];
  for (let i = 0; i < matrixA.length; i += 1) {
    const rowArray = [];
    for (let k = 0; k < matrixB[0].length; k += 1) {
      let multResult = 0;
      let sumResult = 0;
      for (let g = 0; g < matrixA[0].length; g += 1) {
        multResult = matrixA[i][g] * matrixB[g][k];
        sumResult += multResult;
      }
      rowArray.push(sumResult);
    }
    result.push(rowArray);
  }
  return result;
};

const matrixA = [
  [1, 2, 1],
  [0, 1, 0],
  [2, 3, 4],
];
const matrixB = [
  [2, 5],
  [6, 7],
  [1, 8],
];

console.log(multiplyMatrix(matrixA, matrixB));
// [
//  [15, 27],
//  [6, 7],
//  [26, 63],
// ]
