/*

# Задача

Реализуйте и экспортируйте по умолчанию функцию,
которая находит в массиве непрерывные возрастающие на единицу последовательности чисел
и возвращает массив с их перечислением.

# Алгоритм

если arr[i + 1] === arr[i] + 1, то пушим в подмассив[n]
иначе скипаем
повторяем п.1, но теперь пушим в подмассив[n + 1]

*/

// Решение с Маскодинга:
// https://hexlet-io.zoom.us/rec/play/wqf2T78r5w90cT_bqSjSDvthDNv6P3jTdeEfTJ1Op_iwM3exS-zdtMSpG04MkrGnoJUZKHn0e5yRLcFX.DjZ1WDRXXAEku8Xz?canPlayFromShare=true&from=share_recording_detail&startTime=1683042859000&componentName=rec-play&originRequestUrl=https%3A%2F%2Fhexlet-io.zoom.us%2Frec%2Fshare%2FGzuqODthMsZTqMP0j3hx3OBII2fKV5Jq8Szr7-W520oJS2WQgGC3KRX4vyQYnB3Y.UIatWLIdAkn0JaLh%3FstartTime%3D1683042859000

const summaryRanges = (range) => {
  if (range.length < 2) {
    return [];
  }

  const size = range.length;
  const result = [];
  let stack = [];
  for (let i = 0; i < size; i += 1) {
    const currentElement = range[i];
    const nextElement = range[i + 1];

    stack.push(currentElement);
    if (stack[stack.length - 1] + 1 !== nextElement) {
      if (stack.length > 1) {
        result.push(`${stack[0]}->${stack[stack.length - 1]}`);
      }
      stack = [];
    }
  } return result;
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
