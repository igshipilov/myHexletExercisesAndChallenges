const sumOfSquareDigits = (num) => {
  const numAsStr = String(num);
  let sum = 0;
  for (let i = 0; i < numAsStr.length; i += 1) {
    const digit = Number(numAsStr[i]);
    sum += digit * digit;
  }

  return sum;
};
console.log(sumOfSquareDigits(13));

const isHappyNumbers = (num) => {
  let result = num;
  if (num === 1) {
    return true;
  } if (num < 4) {
    return false;
  } for (let limCounter = 0; result !== 1 && limCounter < 10; limCounter += 1) {
    result = sumOfSquareDigits(result);
  } return result === 1;
};

console.log(isHappyNumbers(8));
