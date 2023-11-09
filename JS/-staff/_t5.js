export default class Node {
  constructor(root = null, children = [null, null]) {
    this.root = root;
    this.children = children;
  }

  getKey() {
    return this.root;
  }

  getLeft() {
    const [left] = this.children;
    return left;
  }

  getRight() {
    const [, right] = this.children;
    return right;
  }

  insert(num) {
    if (this.root === null) {
      this.root = num;
    } else if (this.root > num) {
      // здесь надо проходить рекурсивно.
      // Сейчас ошибка в том, что я строго заменяю left или right,
      // а надо сначала проверить: является ли он нулём?
      // Эту проверку мы делаем в первом `if (this.root === null)`,
      // поэтому надо как-то (рекурсивно!) подвести к этой проверке.
      this.children = [new Node(num), this.getRight()];
    } else if (this.root < num) {
      this.children = [this.getLeft(), new Node(num)];
    }
  }
}



const tree = new Node();

console.log(tree);
console.log(tree.getKey());
console.log(tree.getLeft());
console.log(tree.getRight());
console.log(`\n\n`);

tree.insert(9);
console.log(tree);
console.log(tree.getKey());
console.log(tree.getLeft());
console.log(tree.getRight());
console.log(`\n\n`);

tree.insert(17);
console.log(tree);
console.log(tree.getKey());
console.log(tree.getLeft());
console.log(tree.getRight());
console.log(`\n\n`);

tree.insert(4);
console.log(tree);
console.log(tree.getKey());
console.log(tree.getLeft());
console.log(tree.getRight());
console.log(`\n\n`);



tree.insert(3);
console.log(tree);
console.log(tree.getKey());
console.log(tree.getLeft());
console.log(tree.getRight());
console.log(`\n\n`);