const numberFlip = (num) => {
  const numToString = String(Math.abs(num));
  const numLength = numToString.length;

  let result = '';
  for (let i = 0; i < numLength; i += 1) {
    result = `${numToString[i]}${result}`;
  }
  result = Number(result);
  return num < 0 ? -result : result;
};

console.log(numberFlip(-123));
