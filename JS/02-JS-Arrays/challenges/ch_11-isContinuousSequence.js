// my
/*
const isContinuousSequence = (numSequence) => {
    if (numSequence.length < 2) {
        return false;
    }

    for (let i = 1; i < numSequence.length; i += 1) {
        const current = numSequence[i];
        const previous = numSequence[i - 1];
        if (current - previous !== 1) {
            return false;
        }
    } return true;
};
*/

// teacher's
const isContinuousSequence = (numSequence) => {
  const size = numSequence.length;
  if (size <= 1) {
    return false;
  }

  const start = numSequence[0];
  for (let i = 1; i < size; i += 1) {
    if (start + i !== numSequence[i]) {
      return false;
    }
  } return true;
};

console.log(isContinuousSequence([10, 11, 12, 13])); // true
console.log(isContinuousSequence([-5, -4, -3])); // true

console.log(isContinuousSequence([10, 11, 12, 14, 15])); // false
console.log(isContinuousSequence([1, 2, 2, 3])); // false
console.log(isContinuousSequence([7])); // false
console.log(isContinuousSequence([])); // false
