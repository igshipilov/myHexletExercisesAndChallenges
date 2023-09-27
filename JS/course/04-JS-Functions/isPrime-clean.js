// Задача
/*

Реализуйте и экспортируйте по умолчанию функцию, которая проверяет переданное число на простоту
и печатает на экран yes или no.

Примеры
sayPrimeOrNot(5); // 'yes'
sayPrimeOrNot(4); // 'no'
Подсказки
Цель этой задачи — научиться отделять чистый код от кода с побочными эффектами.

Для этого выделите процесс определения того, является ли число простым, в отдельную функцию,
возвращающую логическое значение. Это функция, с помощью которой мы отделяем чистый код от кода,
интерпретирующего логическое значение (как 'yes' или 'no') и делающего побочный эффект (печать на экран).

Пример такого разделения и хороших абстракций — в решении учителя.

*/

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  const stopCalc = Math.sqrt(num);

  for (let i = 2; i <= stopCalc; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const sayPrimeOrNot = (num) => {
  const result = isPrime(num) ? 'yes' : 'no';
  console.log(result);
};

console.log(`isPrime(0) - false?: ${isPrime(0)}`);
console.log(`isPrime(1) - false?: ${isPrime(1)}`);
console.log(`isPrime(2) - true?: ${isPrime(2)}`);
console.log(`isPrime(4) - false?: ${isPrime(4)}`);
console.log(`isPrime(97) - true?: ${isPrime(97)}`);
console.log(`isPrime(90) - false?: ${isPrime(90)}`);
console.log(`isPrime(7) - true?: ${isPrime(7)}`);
