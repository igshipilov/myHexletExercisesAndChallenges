// teacher's solution
const fizzBuzz = (begin, end) => {
  const result = '';

  for (let num = begin; num <= end; num += 1) {
    const hasFizz = num % 3 === 0 ? 'Fizz' : '';
    const hasBuzz = num % 5 === 0 ? 'Buzz' : '';
    console.log(`${hasFizz}${hasBuzz}` || num);
  }
};

// long version
/*
const fizzBuzz = (begin, end) => {
    for (let num = begin; num <= end; num += 1) {
      const isMult3 = num % 3 === 0;
      const isMult5 = num % 5 === 0;
      const both = isMult3 && isMult5;
      switch (true) {
        case both:
          console.log('FizzBuzz');
          break;
        case isMult3:
          console.log('Fizz');
          break;
        case isMult5:
          console.log('Buzz');
          break;

        default:
          console.log(num);
      }
    }
};
*/
void fizzBuzz(1, 16);
