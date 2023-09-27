/*

Создаём главный массив, пустой.
Проходимся по массиву-аргументу и возвращаем новый массив
от 0 до num, потом от num+1 до num+i

*/

const getChunk = (arr, size) => {
  if (arr.length === 0) {
    return [];
  }

  const result = [];
  let sliced;

  for (let i = 0; i < arr.length; i += size) {
    const start = i;
    const end = size + i;
    sliced = arr.slice(start, end);
    result.push(sliced);
  } return result;
};

const a = ['a', 'b', 'c', 'd'];
const b = ['a', 'b', 'c', 'd', 'e', 'f'];
const c = [];

console.log(getChunk(b, 4));
// const sl = a.slice(1,3);
// a.push(sl);
// console.log(a);
