/*

# Задание

Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает переданные версии version1 и version2.
Если version1 > version2, то функция должна вернуть 1, если version1 < version2, то -1,
если же version1 === version2, то 0.

Версия - это строка, в которой два числа (мажорная и минорные версии) разделены точкой, например: 12.11.
Важно понимать, что версия - это не число с плавающей точкой, а несколько чисел не связанных между собой.
Проверка на больше/меньше производится сравнением каждого числа независимо. Поэтому версия 0.12 больше версии 0.2.

Пример порядка версий:
0.1 < 1.1 < 1.2 < 1.11 < 13.37

# Логика / алгоритм решения

Все числа слева от точки записываем в константу major
Все числа справа от точки записываем в константу minor

Если major1 > major2, return 1,
Если major1 < major2, return -1,
Если major1 === major2, то else

Если minor1 > minor2, return 1,
Если minor1 < minor2, return -1,
Если minor1 === minor2, то return 0

Проходимся по массиву
Пока item !== '.', конкатенируем в левый-массив

*/

const compareVersion = (version1, version2) => {
  if (version1 === version2) {
    return 0;
  }
  // teacher's solution
  const [left1, right1] = version1.split('.');
  const [left2, right2] = version2.split('.');

  const major = Math.sign(left1 - left2);
  const minor = Math.sign(right1 - right2);

  return major === 0 ? minor : major;

// my solution (но я уже стёр часть кода)
  // if (major1 > major2) {
  //     return 1;
  // } else if (major1 < major2) {
  //     return -1;
  // } else if (major1 === major2) {
  //     if (minor1 > minor2) {
  //         return 1;
  //     } else if (minor1 < minor2) {
  //         return -1;
  //     }
  // }
};

const first = '10.23';
const second = '10.11';
const third = '9.5';
const fourth = '11.0';
console.log(compareVersion(first, third));

// sandbox tests
// console.log(Math.sign('3'));

// const str = '0.1';
// const [first, second, third] = str;
// console.log(Number(first + second + third));
