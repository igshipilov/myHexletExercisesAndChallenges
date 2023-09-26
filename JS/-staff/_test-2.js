const identity = (v) => v;
console.log(identity('wow')); // wow

const plusAB = (a, b) => a + b;
const sum = identity(plusAB);

// const sum = identity((a, b) => a + b);
console.log(sum(1, 8)); // 9