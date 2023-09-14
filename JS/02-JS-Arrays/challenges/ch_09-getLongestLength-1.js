/*

# Задача

Функция возвращает длину максимальной последовательности из неповторяющихся символов.
Подстрока может состоять из одного символа.
Например в строке qweqrty, можно выделить следующие подстроки:
qwe, weqrty. Самой длинной будет weqrty.

# Алгоритм

Принимаем строку
Циклом проходим всей строке
Пушим каждый символ в новый массив sequence, пока sequence не содержит в себе этот символ.
Если sequence содержит в себе этот символ, то вместо пуша:
    1. сохраняем в памяти длину sequence (пушим её значение в другой массив)
    2. обнуляем sequence
    3. увеличиваем точку отсчёта count на +1
    4. i = count
Повторить цикл

*/

const getLongestLength = (str) => {
  if (str.length === 0) {
    return 0;
  }
  if (str.length === 1) {
    return 1;
  }

  const size = str.length;
  const lengths = [];
  let sequence = [];
  let count = -1;

  for (let i = 0; i < size; i += 1) {
    const value = str[i];
    if (!sequence.includes(value)) {
      sequence.push(value);
      if (i === size - 1) {
        lengths.push(sequence.length);
      }
    } else {
      lengths.push(sequence.length);
      sequence = [];
      count += 1;
      i = count;
    }
  }
  const result = lengths;
  return Math.max(...result);
};

let test = ['a', 'b', 'c', 'd'];

test = test.slice(1); // не мутирует
// test.pop(); // мутирует
console.log(test);

// const myTest = test;
// console.log(Math.max(...myTest));
// console.log(myTest);
// console.log(...myTest);

// console.log(getLongestLength('jabjcdel'))   // 7
// console.log(getLongestLength('abcddef'))    // 4
// console.log(getLongestLength('abbccddeffg'))    // 3
// console.log(getLongestLength('abcd'))   // 4
// console.log(getLongestLength('1234561qweqwer')) // 9
// console.log(getLongestLength('1234561qweqwerqer'))  // 9
// console.log(getLongestLength(''))   // 0
// console.log(getLongestLength('jabjcdeljrshmgdhj'))  // 10
