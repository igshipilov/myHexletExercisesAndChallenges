const fib = (num) => {
  if (num === 0) {
    return 0;
  } if (num === 1) {
    return 1;
  } let result = 0;
  result = result + (fib(num - 1)) + (fib(num - 2));

  return result;
};

console.log(fib(5));
// fib(10) === 55
// fib(5) === 5

// alt: using 'for'
/*
const fibo = (num) => {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  }

  let first = 0;
  let second = 1;
  let result = first + second;

  for (let i = 2; i <= num; i += 1) {
    result = first + second;
    first = second;
    second = result;

  }
  return result;
};

console.log(fibo(5));
*/
