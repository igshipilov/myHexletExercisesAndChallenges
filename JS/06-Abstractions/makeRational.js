/*
https://ru.hexlet.io/courses/js-data-abstraction/lessons/invariants/exercise_unit

*/


//  ========== MY ==================
// // BEGIN (write your solution here)

// const makeRational = (numer, denom) => {
//   const gcd = getGcd(numer, denom);
//   const normalizedNumer = numer / gcd;
//   const normalizedDenom = denom / gcd;

//   return `${normalizedNumer}/${normalizedDenom}`;
// };

// const getNumer = (rat) => Number(rat.split('/')[0]);

// const getDenom = (rat) => Number(rat.split('/')[1]);

// const add = (rat1, rat2) => {
//   const multDenom1 = getDenom(rat2);
//   const multDenom2 = getDenom(rat1);

//   const commonDenom = multDenom1 * multDenom2;
//   const sumNumer = (getNumer(rat1) * multDenom1) + (getNumer(rat2) * multDenom2);

//   return makeRational(sumNumer, commonDenom);
// };

// const sub = (rat1, rat2) => {
//   const multDenom1 = getDenom(rat2);
//   const multDenom2 = getDenom(rat1);

//   const commonDenom = multDenom1 * multDenom2;
//   const subNumer = (getNumer(rat1) * multDenom1) - (getNumer(rat2) * multDenom2);

//   return makeRational(subNumer, commonDenom);
// };
// // END
//  ================================


//  ========== TEACHER==============
// BEGIN (write your solution here)

const makeRational = (numer, denom) => {
  const gcd = getGcd(numer, denom);
  return { numer: numer / gcd, denom: denom / gcd };
};

const getNumer = (rat) => rat.numer;

const getDenom = (rat) => rat.denom;

const add = (rat1, rat2) => makeRational(
  getNumer(rat1) * getDenom(rat2) + getNumer(rat2) * getDenom(rat1),
  getDenom(rat1) * getDenom(rat2),
);

const sub = (rat1, rat2) => makeRational(
  getNumer(rat1) * getDenom(rat2) - getNumer(rat2) * getDenom(rat1),
  getDenom(rat1) * getDenom(rat2),
);
// END
//  ================================
