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

Создаём массив с одним уровнем подмассивов.
Подмассивы создаются с помощью итератора (for).
Подмассив перестаёт наполняться, когда его длина становится равна итератору (i).

Каждый подмассив – это набор чисел, вычисленных по формуле:
    первый и последний элементы массива = 1
    второй и предпоследний элементы массива = i (номеру текущей итерации)

    третий элемент подмассива arr[1] = arr[0][1] + arr[0][2]
    четвёртый элемент подмассива arr[1] = arr[0][2] + arr[0][3]
    ...
    пред-предпоследний элемент подмассива arr[1] = arr[0][n - 2] + arr[0][n - 1]

*/

const generate = (lineNumber) => {
  // if (lineNumber === 0) {
  //     return [1];
  // } else if (lineNumber === 1) {
  //     return [[1], [1, 1]];
  // } else {

  const result = [];
  for (let i = 0; i <= lineNumber; i += 1) {
    const inter = [];
    // guard expressions
    if (i === 0) {
      inter.push(1);
    } else if (i === 1) {
      inter.push(1, 1);
    } else if (i === 2) {
      inter.push(1, 2, 1);

      // main calculations
    } else {
      const secondInter = [];
      for (let count = 1; count < i; count += 1) {
        const calc = result[i - 1][count - 1] + result[i - 1][count];
        secondInter.push(calc);
      }
      inter.push(1, i, i, 1);
    }
    // inter.push('x');
    result.push(inter);
  } return result;
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

console.log(generate(10)); // [1, 4, 6, 4, 1]
// console.log(ref(4));
