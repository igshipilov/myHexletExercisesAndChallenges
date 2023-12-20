const test = (...props) => {
  const [...arr] = props;

  return [...props];
};

const returnArray = test('one', 'two', 'three');
console.log(returnArray);
console.log(returnArray.includes('one'));
