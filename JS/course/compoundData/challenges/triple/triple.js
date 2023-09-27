// @ts-check
/* eslint default-case: 0, consistent-return: 0 */

// Ссылка на Испытание
// https://ru.hexlet.io/challenges/js_compound_data_triple_exercise/instance

// Ссылка на исходник Хекслета – код для создания pair, а я его расширил для triple
// https://github.com/hexlet-components/js-pairs/blob/main/index.js#L34

// ============= INSPIRED BY HEXLET's SOURCE CODE ===============
// BEGIN (write your solution here)
export const make = (a, b, c) => {
  const triple = (message) => {
    switch (message) {
      case 'getFirst':
        return a;
      case 'getSecond':
        return b;
      case 'getThird':
        return c;
      default:
        throw new Error(`Unknown message '${message}'`);
    }
  };
  triple.triple = true;
  return triple;
};

export const isTripple = (triple) => typeof triple === 'function' && triple.triple;

export const checkTripple = (triple) => {
  if (!isTripple(triple)) {
    const value = typeof triple === 'object' ? JSON.stringify(triple, null, 2) : String(triple);
    throw new Error(`Argument must be triple, but it was '${value}'`);
  }
};

export const get1 = (triple) => {
  checkTripple(triple);
  return triple('getFirst');
};

export const get2 = (triple) => {
  checkTripple(triple);
  return triple('getSecond');
};

export const get3 = (triple) => {
  checkTripple(triple);
  return triple('getThird');
};
// END
// =====================================================
