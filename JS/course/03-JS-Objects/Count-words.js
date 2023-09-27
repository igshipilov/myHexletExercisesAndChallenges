import _ from 'lodash';

const countWords = (str) => {
  const lowerStr = str.toLowerCase();
  const words = _.words(lowerStr);

  const result = {};

  for (const word of words) {
    // Слово, встречающееся в первый раз, вернёт `0 + 1`, то есть `1`

    // Когда мы обращаемся к ключу по его имени, то получаем его значение:
    // const myObj = { one: 1, two: 2, three: 3 };
    // console.log(myObj['three']); // 3
    result[word] = (result[word] ?? 0) + 1;
  }

  return result;
};

// Если предложение пустое, то возвращается пустой объект
console.log(countWords(''));
// {}

const text1 = 'one two three two ONE one wow';
console.log(countWords(text1));
// {
//   one: 3,
//   two: 2,
//   three: 1,
//   wow: 1,
// }

const text2 = 'another one sentence with strange Words words';
console.log(countWords(text2));
// {
//   another: 1,
//   one: 1,
//   sentence: 1,
//   with: 1,
//   strange: 1,
//   words: 2,
// }
