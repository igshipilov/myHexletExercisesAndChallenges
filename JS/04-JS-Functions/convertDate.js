// Задача
/*

Реализуйте функцию, которая конвертирует даты в массив человеко-читаемых строк на английском языке.
Каждая из дат представлена массивом [2001, 10, 18], в котором первый элемент — это год, второй — месяц,
и третий — число. Функция на вход должна принимать любое количество параметров.

Если в функцию ничего не было передано, она должна вернуть пустой массив.
Экспортируйте функцию по умолчанию.

Примеры:
convert();
// []

convert([1993, 3, 24]);
// ['Sat Apr 24 1993']

convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18]);
// ['Sat Apr 24 1993', 'Fri Sep 12 1997', 'Sun Nov 18 2001']

Подсказки
Для работы с датами воспользуйтесь объектом new Date() и его методом toDateString()
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString

*/

const convert = (...numbers) => {
  if (numbers.length === 0) {
    return numbers;
  }

  const formattedDates = [];
  for (const date of numbers) {
    const dateFull = new Date(...date);
    const prettiedDate = dateFull.toDateString();
    formattedDates.push(prettiedDate);
  }

  return formattedDates;
};

console.log(convert());
// []

console.log(convert(
  [1993, 3, 24],
));
// ['Sat Apr 24 1993']

console.log(convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18]));
// ['Sat Apr 24 1993', 'Fri Sep 12 1997', 'Sun Nov 18 2001']

// ========= TESTING Date.parse() ===========
// const test = convert([1993, 3, 24]);
// const begin = new Date(1970, 1, 1);

// console.log(Date.parse(test));
// console.log(begin);
// console.log(Date.parse(begin));
