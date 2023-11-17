// tutor: https://www.youtube.com/watch?v=loLjdVaaDKs

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }

        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }

        currentNode = currentNode.right;
      }
    }
  }
}

const tree = new BinaryTree();

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
