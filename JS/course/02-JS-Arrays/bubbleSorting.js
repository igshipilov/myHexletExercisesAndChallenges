const unsortedArray = [5, 2, 9, 4, 8, 1, 3, 6, 7, 10];

const getSortedArray = (arr) => {
  let steppsCount = arr.length - 1;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < steppsCount; i += 1) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    steppsCount -= 1;
  } while (swapped);

  return arr;
};

console.log(getSortedArray(unsortedArray));
