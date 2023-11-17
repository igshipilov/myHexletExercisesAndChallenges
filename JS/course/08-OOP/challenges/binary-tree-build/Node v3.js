export default class Node {
  constructor(key = null) {
    this.key = key;
  }

  getKey() {
    return this.key;
  }

  getLeft() {
    return this.left || null;
  }

  getRight() {
    return this.right || null;
  }

  insert(num) {
    const newNode = new Node(num);
    if (!this.getKey()) {
      this.key = newNode;
    }

    let currentNode = this.key;

    while (currentNode) {
      if (num < this.key) {
        if (!this.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!this.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }
}

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
