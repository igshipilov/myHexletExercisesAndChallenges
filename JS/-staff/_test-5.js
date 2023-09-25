// // const str = 'abc';

// // console.log([...str])
// // console.log(str.split('').map((char) => 'v').join(''))
// // console.log(str.charCodeAt())


// const isChar = (char) => char.toUpperCase() !== char.toLowerCase();

// const alphabetPosition = (str) => {
//   return [...str]
//     .filter((char) => isChar(char))
//     .map((char) => char.charCodeAt() - 96).join(' ')
// };

// const str = '|fc<02am';

// // console.log(str[0].toUpperCase)
// // console.log(isChar(str[0]))

// console.log(alphabetPosition(str))

const a = 42;
console.log(typeof a.toString())