/*

Сложить все числа от 2 до 0.5 num, которые делятся без остатка.
Если эта сумма = num, то вернуть true (то есть подтвердить: это совершенное число)

*/

const isPerfect = (num) => {
  if (num < 6) {
    return false;
  }

  let result = 0;
  const numHalf = 0.5 * num;

  for (let i = 1; i <= numHalf; i += 1) {
    if (num % i === 0) {
      result += i;
    }
  } return result === num;
};

console.log(isPerfect(6));
