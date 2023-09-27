const invertCase = (str) => {
  let result = '';

  for (let i = 0; i < str.length; i += 1) {
    const upper = str[i] === str[i].toUpperCase();
    result += upper ? str[i].toLowerCase() : str[i].toUpperCase();
  }
  return result;
};
console.log(invertCase('tEsT')); // expected: TeSt
