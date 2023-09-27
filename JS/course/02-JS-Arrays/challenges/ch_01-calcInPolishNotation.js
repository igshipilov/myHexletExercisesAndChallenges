/*

# Задача

Экспортируйте по умолчанию функцию, которая принимает массив,
каждый элемент которого содержит число или знак операции (+, -, *, /).
Функция должна вернуть результат вычисления по обратной польской записи.
Если в какой-то момент происходит деление на ноль, функция должна вернуть значение null.

# Логика решения

Аргумент-массив копируем в другой массив result
Проходим по result
Если наткнулись на символ, то
    с помощью eval() производим вычисления: этот символ и два последних item
    заменяем позапрошлый символ получившимся ответом
    удаляем из result два элемента: позапрошлый и текущий оператор включительно (splice)
    счётчику i делаем -2

АЛЬТ
// Проходим по массиву-аргументу
// Если текущий элемент Number И два следующих элемента НЕ оператор, то пушим текущий элементв result
//     Иначе сначала с помощью eval вычисляем calc = эти два элемента, помещая между ними eval
//     затем пушим calc в result

*/

const operatorsInString = ['+', '-', '*', '/'];

const calcInPolishNotation = (arr) => {
  const result = arr;
  for (let i = 0; i < result.length; i += 1) {
    if (isNaN(result[i])) {
      const calc = eval(result[i - 2] + result[i] + result[i - 1]);
      console.log(calc);

      result[i - 2] = calc;
      result.splice(result[i - 1], result[i]);
      i -= 2;
    }
  } return result;
};

/*
const calcInPolishNotation = (arr) => {
    const result = [];
    for (let i = 0; i < result.length; i += 1) {
        if (isNaN(arr[i])) {
            result.push()
            const calc = eval(arr[i - 2] + arr[i] + arr[i - 1]);
            if (arr[i] === '/' && calc === 0) {
                return null;
            } else {
                result.push(calc)
            }
        }
    }
};
*/

const testArr = [1, 2, '+', 4, '*', 3, '+'];
const calc = eval(testArr[1] + testArr[2] + testArr[3]); // 6
console.log(calc);

// console.log(calcInPolishNotation([1, 2, '+', 4, '*', 3, '+'])); // 15
// console.log(calcInPolishNotation([7, 2, 3, '*', '-'])); // 1

// sandbox texts
// console.log(operatorsInString[3]);
// console.log(eval(5 + operatorsInString[3] + 2));
// console.log(isNaN(operatorsInString[1]));

// console.log(operatorsInString[3] === '/');
// console.log(test);
// const test = [];
// const added = test.push(['a'], ['check']);
// console.log(test);

// const testArr = ['one', 'two', 'three', 'four'];
// testArr.splice(1,2);
// console.log(testArr);

// console.log(isNaN('/'));
