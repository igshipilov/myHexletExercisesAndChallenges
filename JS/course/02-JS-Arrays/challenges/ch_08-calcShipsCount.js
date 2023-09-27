/*

# Задача

Реализуйте и экспортируйте функцию calcShipsCount(), которая принимает на вход поле боя
в виде квадратного двумерного массива из нулей и единиц.
Ноль — пустая ячейка, единица — часть корабля.
Функция должна вернуть количество кораблей на поле боя.

Так как корабли не должны соприкасаться друг с другом,
реализуйте и экспортируйте функцию isValidField(),
которая проверяет расстановку кораблей на корректность.

# Логика

// isValidField
Каждый целый корабль должен быть окружён нулями.

Как понять, что корабль цельный?
- У него меньше 5 палуб (меньше пяти идущих подряд единиц)

Поле квадратное, а значит количество строк равно длине любой строки

Перебираем каждый подмассив.
Если текущий элемент === 1, то вернуть FALSE, если есть хотя бы одна `1` одновременно
слева/справа и сверху/снизу от текущего элемента.

Если (arr[row][column] === 1)
    если (
        (arr[row][column - 1] === 1 || arr[row][column + 1] === 1)
        &&
        (arr[row - 1][column] === 1 || arr[row + 1][column] === 1)) {
            return false
        }

Ещё надо проверить углы

// calcShipsCount

??? не туда начал думать
    // сохраняем текущую колонку в tempColumn
    // сохраняем текущую строку в tempRow
    // пушим `1` в подмассив

    // Если следующий элемент [row][column + 1] === `0`, то
    //     row += 1
    //     for (let column = tempColumn; column < columnsCount; column += 1) {
    //     }
    //     row = tempRow

// Если текущий элемент [row][column] === 1, то

// 1. создать temp = текущий элемент [column]
// 2. пушить текущий элемент [row][column] в новый массив, пока текущий элемент === 1
//     если [row][column] === 0, то
//         присвоить [row + 1][column] = temp
//             если [row + 1][column] === 0, то
//                 пушить туда же
//             иначе
//             запушить этот подмассив в новый массив
//             закончить цикл, увеличить счётчик и пойти снова
// 3. return resultArray.length

Идём построчно
Если текущий элемент [row][column] `1`, то
        если следующий элемент равен `1`, то пушим текущий элемент в подмассив
        если следующий элемент равен `0`, то
            сохраняем текущую строку в tempRow
            сохраняем текущую колонку в tempColumn

            for (row = tempRow; row < rowsCount; row += 1) {
                если текущий элемент [row][column] === 1, то
                пушим его в подмассив
            }
            пушим подмассив в resultArray
            row = tempRow
            column += 1

return resultArray.length

*/

// Вебинар >> isValidField на 1:00:00, calcShipsCount на 1:38:50
// https://www.youtube.com/watch?list=PLpKBFcZ-GCBuDVUqmfzmDnYsv4tAd3ZAY&t=5930&v=iwymqTx-b_8&feature=youtu.be

//  попробуй через stack
//  перебираем,
// когда [row][column] = `1`, то counter += 1
// если [row - 1][column] = `1`, то counter -= 1

// моё calcShipsCount
/*
const calcShipsCount = (arr) => {
    const rowsCount = arr.length;

    if (rowsCount === 0) {
        return 0;
    }
    if (rowsCount === 1 && arr[0][0] === 0) {
        return 0;
    }
    if (rowsCount === 1 && arr[0][0] === 1) {
        return 1;
    }
    if (isValidField(arr) === false) {
        return 0;
    }

    const columnsCount = arr[0].length;
    let counter = 0;

    for (let row = 0; row < rowsCount; row += 1) {
        for (let column = 0; column < columnsCount; column += 1) {
            if (arr[row][column] === 1) {
                if (arr[row][column + 1] === 0) {
                    if (arr[row + 1][column] === 1) {
                        const tempRow = row;
                        for (row += 1; row < rowsCount && arr[row][column] === 1; row += 1) {
                        }
                        row = tempRow;
                    }
                }
                counter += 1;
            }
        }
    }
    return counter;
};
*/

// calcShipsCount backup, считает правильно все тесты,
// кроме battlefield 5: выдаёт `7`, а надо `6`
/*
const calcShipsCount = (arr) => {
    const rowsCount = arr.length;

    if (rowsCount === 0) {
        return 0;
    }
    if (rowsCount === 1 && arr[0][0] === 0) {
        return 0;
    }
    if (rowsCount === 1 && arr[0][0] === 1) {
        return 1;
    }
    if (isValidField(arr) === false) {
        return 0;
    }

    const columnsCount = arr[0].length;

    const resultArray = [];
    const currentArray = [];

    for (let row = 0; row < rowsCount; row += 1) {
        for (let column = 0; column < columnsCount; column += 1) {
            if (arr[row][column] === 1) {
                if (arr[row][column + 1] === 1) {
                currentArray.push(arr[row][column]);
                } else if (arr[row + 1][column] !== 0) {
                    const tempRow = row;
                    for (row += 1; row < rowsCount && arr[row][column] === 1; row += 1) {
                        currentArray.push(arr[row][column])
                    }
                    resultArray.push(currentArray);
                    row = tempRow;
                }
            }
        }
    } return resultArray.length;
};
*/

// Альт. решение: начинай проходить со второй строки [row + 1] и проверяй верхние три значения:
// [row][column - 1]
// [row][column]
// [row][column + 1]

// Моё, долгое
/*
const isValidField = (arr) => {
    if (arr.length < 2) {
        return true;
    }

    const rowsCount = arr.length;
    const columnsCount = arr[0].length;

    for (let row = 0; row < rowsCount; row += 1) {
        for (let column = 0; column < columnsCount; column += 1) {
            if (arr[row][column] === 1) {
                const left = column > 0 && arr[row][column - 1] === 1 ? 1 : 0;
                const right = column < columnsCount - 1 && arr[row][column + 1] === 1 ? 1 : 0;
                const top = row > 0 && arr[row - 1][column] === 1 ? 1 : 0;
                const bot = row < rowsCount - 1 && arr[row + 1][column] === 1 ? 1 : 0;

                const topLeft = column > 0 && row > 0 && arr[row - 1][column - 1] === 1 ? 1 : 0;
                const topRight = column < columnsCount - 1 && row > 0 && arr[row - 1][column + 1] === 1 ? 1 : 0;
                const botLeft = column > 0 && row < rowsCount - 1 && arr[row + 1][column - 1] === 1 ? 1 : 0;
                const botRight = column < columnsCount - 1 && row < rowsCount - 1 && arr[row + 1][column + 1] === 1 ? 1 : 0;

                if ((left === 1 || right === 1) && (top === 1 || bot === 1)) {
                        return false;
                    } else if (topLeft === 1 || topRight === 1 || botLeft === 1 || botRight === 1) {
                        return false;
                    }
                }
        }
    } return true;
};
*/

/*
const calcShipsCount = (arr) => {
    const rowsCount = arr.length;

    if (rowsCount === 0) {
        return 0;
    }
    if (rowsCount === 1 && arr[0][0] === 0) {
        return 0;
    }
    if (rowsCount === 1 && arr[0][0] === 1) {
        return 1;
    }
    if (isValidField(arr) === false) {
        return 0;
    }

    const columnsCount = arr[0].length;
    let counter = 0;

    for (let row = 0; row < rowsCount; row += 1) {
        for (let column = 0; column < columnsCount; column += 1) {
            if (arr[row][column] === 1 && (arr[row][column + 1] === 0 || arr[row][column - 1] === 0)) {
                if (row > 0 && (arr[row - 1][column] === 0 || arr[row + 1][column] === 0)) {
                    counter += 1;
                }
            counter += 1;

            }
        }
    }
    return counter;
};
*/

const calcShipsCount = (arr) => {
  const len = arr.length;

  if (len === 0) {
    return 0;
  }
  if (len === 1 && arr[0][0] === 0) {
    return 0;
  }
  if (len === 1 && arr[0][0] === 1) {
    return 1;
  }
  if (isValidField(arr) === false) {
    return 0;
  }

  let count = 0;

  for (let column = 0; column < len; column += 1) {
    for (let row = 0; row < len; row += 1) {
      const currentCell = arr[row][column];
      const prevCell = arr[row][column - 1];

      // логика этих двух if'ов:
      // считаем корабль только в случаях, если выполнились оба условия.

      // Проходим по циклу for, наткнулись на единицу -> проверяем:
      // это единица И слева не единица? -> ДА! Тогда проверяем ещё одно условие:
      // сверху не единица? -> ДА!
      // Тогда counter += 1. Если хотя бы один НЕТ, то переходим к следующему циклу.

      // Если выполнилось первое условие: текущая ячейка === 1 И ячейка слева === 0 (!== 1),
      //      то проверяем ещё одно условие:
      //      если верно хотя бы одно: строка сверху undefined ИЛИ ячейка сверху === 0
      if (currentCell && !prevCell) {
        // `!arr[row - 1]` это проверка на минус первую строку, пресекает undefined
        // то есть !undefined === true

        // `!arr[row - 1][column]` проверка ячейки сверху
        // если там не единица (!1 === false)
        if (!arr[row - 1] || !arr[row - 1][column]) {
          // если оба if вернули `true`, тогда увеличиваем счётчик
          count += 1;
        }
      }
    }
  } return count;
};

// webinar's
const isValidField = (arr) => {
  if (arr.length < 2) {
    return true;
  }

  const rowsCount = arr.length;
  const columnsCount = arr[0].length;

  for (let column = 0; column < columnsCount; column += 1) {
    for (let row = 0; row < rowsCount - 1; row += 2) {
      const currentCell = arr[row][column];
      const botLeft = arr[row + 1][column - 1];
      const botRight = arr[row + 1][column + 1];

      // Как работает эта проверка?

      // JS преобразовывает нули `0` в `false`, а единицы `1` в `true`
      // Чтобы дойти до `return false` мы должны в `if ()` получить `true`,
      // при этом у нас тут `&&`, поэтому надо, чтобы обе части условия && вернули `true`
      // поэтому если хотя бы одна часть выражения возвращает `false`,
      // мы не добираемся до `return false`

      // то есть когда currentCell или хотя бы один из botLeft, botRight равен `0`,
      // тогда `if ()` возвращает `0`, а значит выражение в `{}` не выполняется
      if (currentCell && (botLeft || botRight)) {
        return false;
      }
    }
  } return true;
};

// calcShipsCount
const battleField1 = [];
const battleField2 = [[1]];
const battleField3 = [[0]];

const battleField4 = [
  [0, 0, 1],
  [0, 0, 0],
  [1, 1, 0],
];
const battleField5 = [
  [1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 0, 0],
];

const battleField6 = [
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1],
];

console.log(calcShipsCount(battleField1)); // 0
console.log(calcShipsCount(battleField2)); // 1
console.log(calcShipsCount(battleField3)); // 0
console.log(calcShipsCount(battleField4)); // 2
console.log(calcShipsCount(battleField5)); // 6
console.log(calcShipsCount(battleField6)); // 5

// isValid
// const battleField1 = [];
// const battleField2 = [
//   [0, 1, 0, 0],
//   [1, 0, 0, 1],
//   [0, 0, 0, 0],
//   [0, 1, 1, 1],
// ];
// const battleField3 = [
//   [0, 1, 1, 0],
//   [0, 0, 0, 0],
//   [0, 1, 0, 0],
//   [0, 1, 0, 1],
// ];
// const battleField4 = [
//   [1, 1, 0, 0, 0, 0],
//   [0, 0, 0, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0],
//   [0, 1, 1, 1, 0, 1],
//   [0, 0, 0, 0, 0, 1],
//   [1, 1, 0, 1, 0, 0],
// ];

// const battleField5 = [
//   [1, 1, 0, 0, 0, 0],
//   [0, 0, 0, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0],
//   [0, 1, 1, 0, 0, 1],
//   [0, 0, 1, 0, 0, 1],
//   [1, 0, 0, 1, 0, 0],
// ];

// const battleField6 = [
//   [1, 1, 0, 1, 1],
//   [0, 0, 0, 0, 0],
//   [1, 1, 0, 1, 1],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 1],
// ];

// console.log(isValidField(battleField1)) // true
// console.log(isValidField(battleField2)) // false
// console.log(isValidField(battleField3)) // true
// console.log(isValidField(battleField4)) // true
// console.log(isValidField(battleField5)) // false
// console.log(isValidField(battleField6)) // true
