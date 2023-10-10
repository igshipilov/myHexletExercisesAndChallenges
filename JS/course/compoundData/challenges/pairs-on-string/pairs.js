//  https://ru.hexlet.io/challenges/js_compound_data_pairs_on_strings_exercise/instance

// ========== MY ===========
// const separator = '\t';

// export const cons = (str1, str2) => `${str1}${separator}${str2}`;

// export const car = (pair) => {
//   const separatorIndex = pair.indexOf(separator);
//   return pair.slice(0, separatorIndex);
// };

// export const cdr = (pair) => {
//   const separatorIndex = pair.indexOf(separator) + 1;
//   return pair.slice(separatorIndex);
// };
// =========================

// ======= TEACHER =========
const separator = '\t';

const getSeparatorIndex = (str) => {
  const iter = (i) => (str[i] === separator ? i : iter(i + 1));

  return iter(0);
};

const getSlice = (pair, indexStart, indexEnd) => {
  // for (let i = begin; i <= end; i += 1) {};
  // эта строчка – подсказка себе, чтобы я смог с помощью рекурсии построить логику цикла

  const iter = (acc, currentIndex) => {
    // Выходим из цикла, возвращая текущее состояние аккумулятора,
    // когда текущий индекс дошёл до финального индекса
    if (currentIndex >= indexEnd) {
      return acc;
    }

    // В остальных случаях наполняем новый аккумулятор значениями:
    // `${переданный-символ-аргумент}${текущий-символ}`
    const newAcc = `${acc}${pair[currentIndex]}`;

    // Сама рекурсия, представленная как итеративный процесс
    return iter(newAcc, currentIndex + 1);
  };

  // Запуск итеративного процесса
  return iter('', indexStart);
};

export const cons = (str1, str2) => `${str1}${separator}${str2}`;
export const car = (pair) => getSlice(pair, 0, getSeparatorIndex(pair));
export const cdr = (pair) => getSlice(pair, getSeparatorIndex(pair) + 1, pair.length);
// =========================
