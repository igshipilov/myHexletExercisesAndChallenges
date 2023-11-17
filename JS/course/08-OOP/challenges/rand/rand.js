export default class Random {
  constructor(seed) {
    this.seed = seed;
    this.resetValue = seed;
  }

  getNext() {
    this.seed += 1;
    return this.seed;
  }

  reset() {
    this.seed = this.resetValue;
  }
}

const seq = new Random(100);

const result1 = seq.getNext();
const result2 = seq.getNext();

const seq2 = new Random(100);

const result21 = seq2.getNext();
const result22 = seq2.getNext();

console.log(result1);
console.log(result2);

seq.reset();
console.log(result1);
console.log('\n\n');

console.log(result21);
console.log(result22);
