const arr = [1, 1, 2, 3, 4];

console.log(arr.map((num) => {
  if (num === 1) {
    return num * 10;
  }
  return num;
}));
