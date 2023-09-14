const calcInPolishNotation = (arr) => {
  const operators = ['+', '-', '*', '/'];
  const stack = [];

  for (const item of arr) {
    if (!operators.includes(item)) {
      stack.push(item);
      // когда условие выполняется, continue сразу же запускает цикл заново,
      // не давая дальнейшему коду отработать и испортить вычисления
      continue;
    }

    const b = stack.pop();
    const a = stack.pop();

    let result;
    switch (item) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        if (b === 0) {
          return null;
        } result = a / b;
        break;
      default:
        break;
    } stack.push(result);
  } return stack[0];
};

console.log(calcInPolishNotation([1, 2, '+', 4, '*', 3, '+'])); // 15
console.log(calcInPolishNotation([7, 2, 3, '*', '-'])); // 1
console.log(calcInPolishNotation([3, 5, 0, '/', '+'])); // null
