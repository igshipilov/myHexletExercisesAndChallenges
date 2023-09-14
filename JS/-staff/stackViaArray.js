const brackets = '(()))';

const checkIsBalanced = (expression) => {
  const stack = [];
  for (const symbol of expression) {
    if (symbol === '(') {
      stack.push(symbol);
    } else if (symbol === ')') {
      if (!stack.pop()) {
        return false;
      }
    }
  } return stack.length === 0;
};

console.log(checkIsBalanced(brackets));
