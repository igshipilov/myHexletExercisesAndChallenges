// Задача
/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив чисел и искомое число.
Задача функции — найти в массиве ближайшее число к искомому и вернуть его индекс в массиве.

Если в массиве содержится несколько чисел, одновременно являющихся ближайшими к искомому числу,
то возвращается наименьший из индексов ближайших чисел.

Примеры

findIndexOfNearest([], 2);              // null
findIndexOfNearest([15, 10, 3, 4], 0);  // 2
findIndexOfNearest([7, 5, 3, 2], 4);    // 1
findIndexOfNearest([7, 5, 4, 4, 3], 4); // 2

*/

/*

# Алгоритм
Из каждого элемента массива вычитаем число (второй аргумент нашей функции)
+ приводим каждый элемент по модулю – чтобы избавиться от отрицательного знака

Возвращаем индекс первого наименьшего числа

*/

// ============= MY =====================

// const findIndexOfNearest = (arr, num) => {
//   if (!arr.length) {
//     return null;
//   }
//   const distance = arr.map((el) => Math.abs(el - num));
//   const minNumOfArray = Math.min(...distance);
//   const index = distance.indexOf(minNumOfArray);

//   return index;
// };

// ======================================

// ============= TEACHER =====================
const findIndexOfNearest = (numbers, num) => {
  if (numbers.length === 0) {
    return null;
  }

  const diffs = numbers.map((element) => Math.abs(num - element));

  // Если текущее итерируемое число меньше числа из этого же массива под текущим итерируемым индексом,
  // то в аккумулятор записать текущий индекс.
  // А `index` хранит в себе индекс наименьшего числа на текущий момент.

  // Иначе в аккумулятор записать текущий индекс
  return diffs.reduce((index, diff, currentIndex) => (
    diff < diffs[index] ? currentIndex : index
  ), 0);
};

// ===========================================

console.log(findIndexOfNearest([], 2)); // null
console.log(findIndexOfNearest([15, 10, 3, 4], 0)); // 2
console.log(findIndexOfNearest([7, 5, 3, 2], 4)); // 1
console.log(findIndexOfNearest([7, 5, 4, 4, 3], 4)); // 2
