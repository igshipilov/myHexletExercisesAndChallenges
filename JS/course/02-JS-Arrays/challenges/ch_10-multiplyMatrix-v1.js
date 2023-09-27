/*

# Задача

Реализуйте и экспортируйте по умолчанию функцию, которая принимает две матрицы
и возвращает новую матрицу — результат их произведения.

В результате операции умножения матрицы размера M×N на матрицу размером N×K
является матрица размером M×K, то есть в матрице-результате:
• количество строк = количеству строк из матрицы1
• количество столбцов = количеству столбцов из матрицы.
Например: м1 = 5х4, м2 = 4х1 -> мResult = 5х1 (пять строк, один столбец)

# Алгоритм

1. Развернуть вторую матрицу

    Первый столбец становится последней строкой (n)
    Второй столбец становится предпоследней строкой (n - 1)
    Третий столбец становится предпредпоследней строкой (n - 2)
    ...
    Последний столбец становится первой строкой (0)

2. Перемножить значения соответствующих индексов, для этого перемножаем:
    первую строку [i = 0] первой матрицы с последней строкой второй матрицы [n]
    вторую строку [i + 1] первой матрицы с последней строкой второй матрицы [n - 1]
    третью строку [i + 2] первой матрицы с предпоследней строкой второй матрицы [n -2]
    ...
    последнюю строку [i + fin] первой матрицы с первой строкой второй матрицы [n = 0]

3. Сложить получившиеся произведения

4. Число-сумму из каждой строки заносим в новый подмассив.

    Последняя строка (подмассив) второй матрицы, последовательно перемножаясь
    и складываясь с каждой строкой первой матрицы, наполняет первый столбец
    результирующей матрицы.

    Предпоследняя строка (подмассив) второй матрицы, последовательно перемножаясь
    и складываясь с каждой строкой первой матрицы, наполняет второй столбец
    результирующей матрицы.

    Длина результирующего подмассива (строки) равна длине строки (первого массива)
    второй матрицы (matrix2[0].length)

*/

// const matrixA = [[1, 2], [3, 2]];
// const matrixB = [[3, 2], [1, 1]];
// multiply(matrixA, matrixB);
// [[5, 4], [11, 8]]

const matrixC = [
  [2, 5],
  [6, 7],
  [1, 8],
];
const matrixD = [
  [1, 2, 3],
  [4, 5, 6],
];

// multiply(matrixC, matrixD);
// [
//     [22, 29, 36]
//     [34, 47, 60]
//     [33, 42, 51]
// ]

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

// multiply(matrixA, matrixB);
// [
//     [15, 27],
//     [6, 7],
//     [26, 63],
// ];

const rotateMatrix = (matrix) => {
  const columnsCount = matrix[0].length;
  const rowsCount = matrix.length;
  const rotated = [];

  for (let column = 0; column < columnsCount; column += 1) {
    const sequence = [];
    for (let row = 0; row < rowsCount; row += 1) {
      sequence.push(matrix[row][column]);
    }
    rotated.push(sequence);
  }
  return rotated;
};

// console.log(rotateMatrix(matrixB));

const multiplyArrays = (arr1, arr2) => {
  const size = arr1.length;
  const result = [];
  for (let i = 0; i < size; i += 1) {
    const calc = arr1[i] * arr2[i];
    result.push(calc);
  } return result;
};

// console.log(multiplyArrays([1, 2], [3, 4])); // [3, 8]

const sumArrayElements = (arr) => {
  let result = 0;
  const size = arr.length;
  for (let i = 0; i < size; i += 1) {
    result += arr[i];
  } return result;
};

// console.log(sumArrayElements(multiplyArrays([1, 2], [3, 4]))); // 11

const multiplyMatrix = (matrixFirst, matrixSecond) => {
  const matrixSecondRotated = rotateMatrix(matrixSecond);
  const colCount1 = matrixFirst.length;
  const colCount2 = matrixSecondRotated.length;

  const result = [];
  for (let i = 0; i < colCount1; i += 1) {
    const row = [];
    for (let secArrRow = 0; secArrRow < colCount1 && secArrRow < colCount2; secArrRow += 1) {
      const product = multiplyArrays(matrixFirst[i], matrixSecondRotated[secArrRow]);
      row.push(sumArrayElements(product));
    }
    result.push(row);
  }
  return result;
};

console.log(multiplyMatrix(matrixC, matrixD));
