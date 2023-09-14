// Вводные условия:
// 1. Массивы уже отсортированы
// 2. Сложность решения задачи должна быть линейной

const getIntersectionOfSortedArrays = (arr1, arr2) => {
  if (arr1.length === 0 || arr2.length === 0) {
    return [];
  }

  const size1 = arr1.length;
  const size2 = arr2.length;

  let i = 0;
  let j = 0;
  const mergedArray = [];
  while (i < size1 && j < size2) {
    const item1 = arr1[i];
    const item2 = arr2[i];

    const currentLastSymbol = mergedArray.at(-1);

    // item1 !== currentLastSymbol проверяет, нет ли дубля в новом массиве
    if (item1 === item2 && item1 !== currentLastSymbol) {
      mergedArray.push(item1);
      i += 1;
      j += 1;
    } else if (item1 > item2) {
      j += 1;
    } else {
      i += 1;
    }
  } return mergedArray;
};

console.log(getIntersectionOfSortedArrays(
  [1, 1, 1, 2, 2, 2],
  [1, 1, 2, 2, 3, 3],
)); // [1, 2]

console.log(getIntersectionOfSortedArrays(
  [10, 11, 24],
  [10, 13, 14, 18, 24, 30],
)); // [10, 24]

console.log(getIntersectionOfSortedArrays(
  [10, 11, 24],
  [-2, 3, 4],
)); // []

console.log(getIntersectionOfSortedArrays(
  [],
  [2],
)); // []

console.log(getIntersectionOfSortedArrays(
  [10, 11, 14, 18, 24, 30],
  [10, 13, 14, 18, 24, 30],
)); // [10, 14, 18, 24, 30]

// Функция работает, но у неё кубическая сложность,
// а нам нужно реализовать линейную сложность алгоритма (более быстрый алгоритм)
/*
    for (let i = 0, j = 0; i < arr1.length && j < arr2.length; i += 1, j += 1) {
        if (arr1[i] === arr2[j] && !mergedArray.includes(arr1[i])) {
            mergedArray.push(arr1[i]);
        }
    } return mergedArray;
*/
