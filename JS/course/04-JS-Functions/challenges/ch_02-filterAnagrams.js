// Задача

/*

Анаграммы — это слова, которые состоят из одинаковых букв. Например:

спаниель — апельсин
карат — карта — катар
топор — ропот — отпор
filterAnagrams.js
Реализуйте и экспортируйте по умолчанию функцию, которая находит все анаграммы слова.
Функция принимает исходное слово и список для проверки (массив), а возвращает массив всех анаграмм.
Если в списке слов отсутствуют анаграммы, то возвращается пустой массив.

Примеры

filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
// ['aabb', 'bbaa']

filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
// ['carer', 'racer']

filterAnagrams('laser', ['lazing', 'lazy',  'lacer']);
// []

*/

/*

Функция сопоставляет каждый символ строки с каждым символом каждого элемента из массива.
Например:
  racer --> crazer
        --> carer
        --> racar
        --> caers
        --> racer

Можно ли отфильтровать по возрастанию `.sort()` само слово и каждый итерируемый элемент,
а затем напрямую сравнить через `===`.

# Алгоритм

*/

// ============= MY =====================

const getSortedStr = (str) => [...str].sort().join('');

const filterAnagrams = (str, arr) => {
  const result = arr.filter((el) => getSortedStr(str) === getSortedStr(el));
  return result;
};

// ======================================

// ============= TEACHER =====================

// ===========================================

console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// ['aabb', 'bbaa']

console.log(filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// ['carer', 'racer']

console.log(filterAnagrams('laser', ['lazing', 'lazy', 'lacer']));
// []
