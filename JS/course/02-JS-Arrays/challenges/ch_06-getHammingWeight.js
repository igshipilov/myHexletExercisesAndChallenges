const getHammingWeight = (num) => {
  const numToBinary = num.toString(2);
  const result = [];
  for (let i = 0; i < numToBinary.length; i += 1) {
    const currentElement = numToBinary[i];
    currentElement === '1' ? result.push(currentElement) : '';
  }
  return result.length;
};

console.log(getHammingWeight(0)); // 0
console.log(getHammingWeight(1)); // 1
console.log(getHammingWeight(5)); // 2
console.log(getHammingWeight(10)); // 2
console.log(getHammingWeight(101)); // 4
console.log(getHammingWeight(12345)); // 6

console.log((7).toString(2)); // 111
