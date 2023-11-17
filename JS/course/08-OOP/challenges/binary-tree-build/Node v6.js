export default class Node {
  constructor(key = null) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  getKey() {
    return this.key;
  }

  getLeft() {
    return this.left;
  }

  getRight() {
    return this.right;
  }

  insert(num) {
    if (this.getKey() === null) {
      this.key = num;
    }

    if (num < this.getKey()) {
      if (this.getLeft() === null) {
        this.left = new Node(num);
      } else {
        this.left.insert(num);
      }
    }

    if (num > this.getKey()) {
      if (this.getRight() === null) {
        this.right = new Node(num);
      } else {
        this.right.insert(num);
      }
    }
  }
}

// -----------
// console.log(`---- root: ${JSON.stringify(root)}`);
// console.log(`---- current: ${JSON.stringify(current)}`);
// -----------

// const rootValue = this.getKey();
// const currentValue = node.getKey();

// while (rootValue)
// if (currentValue < rootValue) {
//   if (!this.left) {
//     this.left = node;
//   }

// }

// -----------

// console.log(`>> >> keyValue: ${JSON.stringify(keyValue)}`);
// console.log(`>> >> currentValue: ${currentValue}`);
// -----------

const tree = new Node();

console.log(tree);
console.log('\n\n');

console.log('>> tree.insert(9):');
tree.insert(9);
console.log(tree);
console.log('\n\n');

console.log('>> tree.insert(17):');
tree.insert(17);
console.log(tree);
console.log('\n\n');

console.log('>> tree.insert(4):');
tree.insert(4);
console.log(tree);
console.log('\n\n');

console.log('>> tree.insert(3):');
tree.insert(3);
console.log(tree);
console.log('\n\n');

console.log('>> tree.insert(6):');
tree.insert(6);
console.log(tree);
console.log('\n\n');

// --------------
// console.log(tree.value)
