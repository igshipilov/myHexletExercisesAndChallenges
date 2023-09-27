const firstHalf = (str) => {
  const half = str.length / 2;
  let result = 0;

  for (let i = 0; i < half; i += 1) {
    result += parseInt(str[i]);
  }

  return result;
};
console.log(firstHalf('123456')); // for '1234' expects 3, because 1 + 2

const secondHalf = (str) => {
  const half = str.length / 2;
  let result = 0;

  for (let i = half; i < str.length; i += 1) {
    result += parseInt(str[i]);
  }

  return result;
};
console.log(secondHalf('1234')); // for '1234' expects 7, because 3 + 4

const isHappyTicket = (str) => {
  if (str.length % 2 !== 0) {
    return "bruh, it's odd";
  }
  return firstHalf(str) === secondHalf(str);
};

console.log(isHappyTicket('1533'));
