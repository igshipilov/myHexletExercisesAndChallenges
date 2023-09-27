// my
/*
const getLastWordLength = (str) => {
    const strTrimmed = str.trim();
    const strToArray = strTrimmed.split(' ');
    const lastElementIndex = strToArray[strToArray.length - 1];
    return lastElementIndex.length;
};

*/
// teacher's solution
const getLastWordLength = (str) => {
  const words = str.trim().split(' ');
  const lastWord = words.at(-1);
  return lastWord.length;
};

console.log(getLastWordLength('   Man in black  '));

/// //////
// const str = '   Man in black  ';
// const strTrimmed = str.trim();
// console.log(str.length);
// str.trim()
// console.log(str.length);
// console.log(strTrimmed.length);
