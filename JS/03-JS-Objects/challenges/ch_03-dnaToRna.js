/*

G -> C
C -> G
T -> A
A -> U

*/

// =============== MY ====================
// const rna = {
//   g: 'c',
//   c: 'g',
//   t: 'a',
//   a: 'u',
// };

// const dnaToRna = (strDNA) => {
//   if (strDNA.length === 0) {
//     return '';
//   }

//   let result = '';

//   const lowerDNA = strDNA.toLowerCase();
//   for (const dna of lowerDNA) {
//     if (!Object.hasOwn(rna, dna)) {
//       return null;
//     }
//     result = `${result}${rna[dna]}`;
//   }

//   return result.toUpperCase();
// };
// ======================================

console.log();

// =============== TEACHER ====================

const map = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

const dnaToRna = (dna) => {
  const rna = [];
  for (const nucleotide of dna) {
    if (!Object.hasOwn(map, nucleotide)) {
      return null;
    }
    rna.push(map[nucleotide]);
  }

  return rna.join('');
};

// ============================================

console.log(dnaToRna('ACGTGGTCTTAA')); // 'UGCACCAGAAUU'
console.log(dnaToRna('CCGTA')); // 'GGCAU'
console.log(dnaToRna('')); // ''
console.log(dnaToRna('ACNTG')); // null
