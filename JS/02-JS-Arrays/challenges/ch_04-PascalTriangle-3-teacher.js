/*

# Описание
Треугольник Паскаля — бесконечная таблица биномиальных коэффициентов,
имеющая треугольную форму. В этом треугольнике на вершине и по бокам стоят единицы. Каждое число равно сумме двух расположенных над ним чисел. Строки треугольника симметричны относительно вертикальной оси.

0:      1
1:     1 1
2:    1 2 1
3:   1 3 3 1
4:  1 4 6 4 1

# Задача
Напишите функцию generate, которая возвращает указанную строку треугольника паскаля
в виде массива. Экспортируйте функцию по умолчанию.

Пример:

generate(1); // [1, 1]
generate(4); // [1, 4, 6, 4, 1]

# Алгоритм

Следующую строку наполняем значениями, вычисленными по принципу работы треугольника паскаля:
каждое значение в следующей строке равно сумме двух чисел с соответствующим i и i - 1

*/

const getNextRow = (previousRow) => {
  const nextRow = [];
  for (i = 0; i <= previousRow.length; i += 1) {
    const first = previousRow[i - 1] || 0;
    const second = previousRow[i] || 0;
    nextRow[i] = first + second;
  }
  return nextRow;
};

// console.log(getNextRow([1, 3, 3, 1])) // [1, 4, 6, 4, 1]

const generate = (row) => {
  if (row.length === 1) {
    return [1];
  }

  let currentRow = [1];
  for (let i = 0; i < row; i += 1) {
    currentRow = getNextRow(currentRow);
  }
  return currentRow;
};

console.log(generate(1)); // [1, 1]
console.log(generate(4)); // [1, 4, 6, 4, 1]
