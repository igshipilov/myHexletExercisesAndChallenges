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

# Подсказки
https://www.mathsisfun.com/algebra/triangular-numbers.html

# Алгоритм

Возвращаемая строка это массив.
Количество элементов в строке равно её номеру + 1

Наполняем массив элементами по формуле:
    row! / (column! * (row - column)!)
    Возвращает значение column из строки row

*/

const fac = (num) => {
  let value = 1;
  for (let i = 1; i <= num; i += 1) {
    value *= i;
  }
  return value;
};

// console.log(fac(8));

const generate = (row) => {
  if (row < 1) {
    return [1];
  }
  if (row === 1) {
    return [1, 1];
  }
  if (row === 2) {
    return [1, 2, 1];
  }

  const result = [];
  for (let column = 0; column <= row; column += 1) {
    const calc = fac(row) / (fac(column) * fac(row - column));
    result.push(calc);
  }
  return result;
};

const ref = (lineNumber) => {
  const result = [];
  for (let i = 0; i <= lineNumber; i += 1) {
    const inter = [];
    for (let size = 0; size <= i; size += 1) {
      inter.push('x');
    } result.push(inter);
  } return result;
};

// console.log(generate(3)); // [1, 4, 6, 4, 1]
// console.log(ref(4));

const num = 42;
console.log(num.length);
