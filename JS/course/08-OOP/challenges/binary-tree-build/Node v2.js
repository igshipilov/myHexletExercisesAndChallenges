export default class Node {
  constructor(key = null, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
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
    if (this.key === null) {
      this.key = num;
    }

    if (num < this.key) {
      if (this.getLeft() === null) {
        this.left = new Node(num);
      } else {
        this.left = new Node(this.getLeft(), num, this.getRight());
      }
    }

    if (num > this.key) {
      if (this.getRight() === null) {
        this.right = new Node(num);
      } else {
        this.right = new Node(this.getRight(), this.getLeft(), num);
      }
    }
  }
}

// const tree = new Node();
// console.log(tree);
// console.log(`\n\n`);

// console.log(`>> tree.insert(9):`);
// tree.insert(9);
// console.log(tree);
// console.log(`\n\n`);

// console.log(`>> tree.insert(17):`);
// tree.insert(17);
// console.log(tree);
// console.log(`\n\n`);

// console.log(`>> tree.insert(4):`);
// tree.insert(4);
// console.log(tree);
// console.log(`\n\n`);

// console.log(`>> tree.insert(3):`);
// tree.insert(3);
// console.log(tree);
// console.log(`\n\n`);

// console.log(`>> tree.insert(6):`);
// tree.insert(6);
// console.log(tree);
// console.log(`\n\n`);
