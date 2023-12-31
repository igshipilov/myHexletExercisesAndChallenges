/*
https://ru.hexlet.io/challenges/js_introduction_to_oop_binary_tree_build_exercise/instance

Двоичное дерево — иерархическая структура данных, в которой каждый узел имеет не более двух потомков (детей).
Как правило, первый называется родительским узлом, а дети называются левым и правым наследниками.

В данном испытании мы будем использовать подвид двоичного дерева — двоичное дерево поиска.
Правильное дерево не содержит повторяющихся ключей, и для каждого узла гарантируется,
что в левом поддереве все значения меньше текущего, а в правом — больше.

Двоичное дерево поиска

# Node.js
Реализуйте и экспортируйте по умолчанию класс, который реализует представление узла.

Класс должен содержать:

Геттер getKey() — возвращает ключ.
Геттеры getLeft(), getRight() — возвращают соответственно левого и правого ребёнка.
Если ребёнок в узле отсутствует, геттер возвращает null.
Метод insert(key) — выполняет добавление узла, формируя правильное двоичное дерево.

# Примеры
const tree = new Node();
tree.insert(9);
tree.insert(17);
tree.insert(4);
tree.insert(3);
tree.insert(6);

tree.getKey(); // 9
tree.getLeft().getKey(); // 4
tree.getRight().getKey(); // 17
tree.getLeft().getLeft().getKey(); // 3
tree.getLeft().getRight().getKey(); // 6

# Подсказки
Двоичное дерево: https://ru.wikipedia.org/wiki/Двоичное_дерево
Двоичное дерево поиска: https://ru.wikipedia.org/wiki/Двоичное_дерево_поиска
*/

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

  // Здесь (в `insert()`) в обоих `else if` надо проходить рекурсивно. <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  // Сейчас ошибка в том, что я строго заменяю left или right,
  // а надо сначала проверить: является ли он нулём?
  // Эту проверку мы УЖЕ делаем в начале метода insert(): `if (this.root === null)`,
  // поэтому надо как-то (рекурсивно!) подвести к этой проверке.

  // this.children[0] должна превратиться в this.root,
  // это и есть результат рекурсии, тогда же и сработает первая проверка в `instert()`

  // Логика рассуждения, читай с заголовка «Добавление элемента (INSERT)»:
  // https://ru.wikipedia.org/wiki/Двоичное_дерево_поиска#Добавление_элемента_(INSERT)

  insert(num) {
    if (this.root === null) {
      this.root = num;
    } else if (num < this.root) {
      // рекурсия должна быть уже здесь:

      // пример устройства рекурсии, здесь только три шага:
      // if (this.children[0] === null) {
      //   this.children[0] = new Node(num);

      // } else if (this.children[0].children[0] === null) {
      //   this.children[0].children[0] = new Node(num);

      // } else if (this.children[0].children[0].children[0] === null) {
      //   this.children[0].children[0].children[0] = new Node(num);
      // }

    } else if (num > this.root) {
      if (this.children[1] === null) {
        this.children[1] = new Node(num);
      } else {
        this.children[1].children[1] = new Node(num);
      }
    }
  }
}

// const tree = new Node();

// console.log(tree);
// // console.log(tree.getKey());
// // console.log(tree.getLeft());
// // console.log(tree.getRight());
// console.log(`\n\n`);

// tree.insert(9);
// console.log(tree);
// // console.log(tree.getKey());
// // console.log(tree.getLeft());
// // console.log(tree.getRight());
// console.log(`\n\n`);

// tree.insert(17);
// console.log(tree);
// // console.log(tree.getKey());
// // console.log(tree.getLeft());
// // console.log(tree.getRight());
// console.log(`\n\n`);

// tree.insert(4);
// console.log(tree);
// // console.log(tree.getKey());
// // console.log(tree.getLeft());
// // console.log(tree.getRight());
// console.log(`\n\n`);

// tree.insert(3);
// // console.log(JSON.stringify(tree, null, 2));
// console.log(tree);
// // console.log(tree.getKey());
// // console.log(tree.getLeft());
// // console.log(tree.getRight());
// console.log(`\n\n`);

// tree.insert(6);
// // console.log(JSON.stringify(tree, null, 2));
// console.log(tree);
// // console.log(tree.getKey());
// // console.log(tree.getLeft());
// // console.log(tree.getRight());
// console.log(`\n\n`);

// console.log(tree.children[0].children)
