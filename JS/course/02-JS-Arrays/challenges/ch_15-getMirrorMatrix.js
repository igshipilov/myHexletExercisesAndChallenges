const getMirrorRow = (arrRow) => {
  const size = arrRow.length;
  const mirrored = arrRow.slice();

  for (let start = 0, end = size - 1; start < end; start += 1, end -= 1) {
    mirrored[end] = mirrored[start];
  } return mirrored;
};

const test = [11, 12, 13, 14];
console.log(getMirrorRow(test));

const getMirrorMatrix = (matrix) => {
  const mirroredMatrix = [];
  for (const row of matrix) {
    mirroredMatrix.push(getMirrorRow(row));
  } return mirroredMatrix;
};

console.log(getMirrorMatrix([
  [11, 12, 13, 14],
  [21, 22, 23, 24],
  [31, 32, 33, 34],
  [41, 42, 43, 44],
]));

// const newTest = test;
// newTest[0] = 'x';
// console.log(test);

//  [
//     [11, 12, 12, 11],
//     [21, 22, 22, 21],
//     [31, 32, 32, 31],
//     [41, 42, 42, 41],
//  ])
