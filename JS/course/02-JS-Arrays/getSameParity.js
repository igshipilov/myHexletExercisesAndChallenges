const getSameParity = (coll) => {
  if (coll.length === 0) {
    return [];
  }

  const result = [];
  const remainder = Math.abs(coll[0] % 2);

  for (const item of coll) {
    if (Math.abs(item % 2) === remainder) {
      result.push(item);
    }
  }

  return result;
};

// console.log(getSameParity([1, 2, 3]));

console.log(getSameParity([1, 2, 3, 4, 5])); // 1, 3, 5
console.log(getSameParity([2, 3, 4, 5, 6])); // 2, 4, 6
console.log(getSameParity([5, 6, 10, 12, 20])); // 5
console.log(getSameParity([-3, 2, 1])); // -3, 1
