// @ts-check
// Разъяснение Поддержки: https://ru.hexlet.io/topics/32139
// Урок из курса Хекслет по функциональному программированию: https://ru.hexlet.io/courses/js-functions-hard-way/lessons/return-function/theory_unit


export const cons = (x, y) => (f) => f(x, y);

console.log(cons)

// BEGIN (write your solution here)
export const car = cons((x) => x);
export const cdr = cons((x, y) => y);
// END
