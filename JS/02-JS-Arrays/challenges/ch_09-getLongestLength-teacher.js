/*

# Логика

Заводим две пустые переменные:
    sequence = [] // перезаписываемый массив, используем его для расчёта длины последовательности
    maxLength = 0 // перезаписываемая переменная, содержащая в себе текущую макс. длину

Один раз проходимся по всей строке-аргументу
Пушим в sequence текущее итерируемое значение (char)
Если char уже есть в sequence, то перезаписываем sequence на слайснутую версию:
    отрезаем от символа, следующего за оригиналом дубликата,
    например: 'abca', здесь оригинал дубликата str[0], то есть первый символ 'a'

В любом случае (на каждой итерации) мы перезаписываем maxLength на значение текущей макс. длин

*/

const getLongestLength = (str) => {
  let sequence = [];
  let maxLength = 0;

  for (const char of str) {
    const index = sequence.indexOf(char);
    sequence.push(char);
    if (index !== -1) {
      sequence = sequence.slice(index + 1);
    }
    const sequenceLength = sequence.length;
    if (sequenceLength > maxLength) {
      maxLength = sequenceLength;
    }
  }

  return maxLength;
};

console.log(getLongestLength('abcabcbb')); // 3

console.log(getLongestLength('jabjcdel')); // 7
console.log(getLongestLength('abcddef')); // 4
console.log(getLongestLength('abbccddeffg')); // 3
console.log(getLongestLength('abcd')); // 4
console.log(getLongestLength('1234561qweqwer')); // 9
console.log(getLongestLength('1234561qweqwerqer')); // 9
console.log(getLongestLength('')); // 0
console.log(getLongestLength('jabjcdeljrshmgdhj')); // 10
