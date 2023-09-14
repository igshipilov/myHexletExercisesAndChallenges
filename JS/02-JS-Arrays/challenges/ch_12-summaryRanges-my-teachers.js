/*

# Задача

Реализуйте и экспортируйте по умолчанию функцию,
которая находит в массиве непрерывные возрастающие на единицу последовательности чисел
и возвращает массив с их перечислением.

*/

const getRangesFromArray = (array) => {
  const first = array[0];
  const last = array[array.length - 1];

  return `${first}->${last}`;
};

const summaryRanges = (array) => {
  if (array.length < 2) {
    return [];
  }
  const rSize = array.length;

  const ranges = []; // result
  let sequence = []; // intermediate stack
  for (let i = 0; i < rSize; i += 1) {
    sequence.push(array[i]);
    const current = array[i];
    const next = array[i + 1];
    if (current + 1 !== next) {
      if (sequence.length > 1) {
        const range = getRangesFromArray(sequence);
        ranges.push(range);
      }
      sequence = [];
    }
  }
  return ranges;
};

console.log(summaryRanges([]));
// []

console.log(summaryRanges([1]));
// []

console.log(summaryRanges([1, 2, 3]));
// ['1->3']

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
// ['0->2', '4->5']

console.log(summaryRanges([110, 111, 112, 111, -5, -4, -2, -3, -4, -5]));
// ['110->112', '-5->-4']
