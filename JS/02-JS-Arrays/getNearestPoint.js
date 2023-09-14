const getDistance = ([x1, y1], [x2, y2]) => {
  const xs = x2 - x1;
  const ys = y2 - y1;

  return Math.sqrt(xs ** 2 + ys ** 2);
};

const locations = [
  ['Park', [10, 5]],
  ['Sea', [1, 3]],
  ['Museum', [8, 4]],
];

const currentPoint = [5, 5];

// console.log(getDistance([10, 10],[8, 7]));

// Логика моего решения
/*

Маппим [x, y] на каждый подмассив массива locations
Пушим в новый массив дистанцию от point до 'y' значения (это координаты, напр. [10, 5])
В новом массиве находим кратчайшую дистанцию
Находим её индекс
Находим в locations подмассив с таким же индексом
Возвращаем из него 'x' значение

*/

// my solution
/*
const getTheNearestLocation = (locations, point) => {
    if (locations.length === 0 || point.length === 0) {
        return null;
    }
    const newArr = [];
    for (const [, y] of locations) {
        const allDistances = getDistance(point, y);
        newArr.push(allDistances);
    } const shortestPath = Math.min(...newArr);
    console.log(newArr);
    console.log(shortestPath);

    const indexOfShortestPath = newArr.indexOf(shortestPath);
    console.log(indexOfShortestPath);

    const result = locations[indexOfShortestPath];
    // console.log(result);

    return result;
    // locations[locations.indexOf(newArr.indexOf(shortestPath))][0];
};

console.log(getTheNearestLocation(locations, currentPoint));
*/

//  teacher's solution

const getTheNearestLocation = (locations, currentPoint) => {
  if (locations.length === 0) {
    return null;
  }

  // Записываем в переменную подмассив (соответствует locations[n], напр. ['Park', [10, 5]]
  // Он выступает в роли названии локации точки отсчёта
  let [nearestLocation] = locations;

  // Записываем в переменную точку отсчёта – координаты, второй элемент этого подмассива,
  // соответствует locations[n][1], напр [10, 5]
  const [, nearestPoint] = nearestLocation;

  // Находим кратчайшую дистанцию. Аргументы подфункции здесь:
  // 1. аргумент главной функции
  // 2. координаты, как второй элемент подмассива
  let lowestDistance = getDistance(currentPoint, nearestPoint);

  // Проводим обычный перебор item в массиве.
  // Здесь item === ['Park', [10, 5]], item === ['Sea', [1, 3]], item === ['Museum', [8, 4]]
  for (const location of locations) {
    // Записываем в переменную point второй элемент из item
    // Получается, что point === [10, 5], point === [1, 3], point === [8, 4]
    const [, point] = location;

    // Записываем в переменную расчёт дистанции от аргумента-координаты до point из item
    const distance = getDistance(currentPoint, point);

    // Если эта высчитанная дистанция меньше текущей кратчайшей дистанции,
    // то перезаписываем
    // 1. текущую кратчайшую дистанцию
    // 2. текущее имя локации
    if (distance < lowestDistance) {
      lowestDistance = distance;
      nearestLocation = location;
    }
  }
  // Когда прошли весь цикл, получили в записанную переменную кратчайшую дистанцию.
  // Это очень похоже на алгоритм нахождения минимального числа в массиве (или это он и есть?)
  return nearestLocation;
};

/// /////////////////////////////////////////
/// ////////// Test field //////////////////
/// ///////////////////////////////////////

const testLoc = [
  ['Park', [10, 5]],
  ['Sea', [1, 3]],
  ['Museum', [8, 4]],
];

// const [first] = testLoc;
// const first = testLoc[0];
const [first] = testLoc;
const [, coord] = first;

console.log(first);

/*

Перебираю locations с помощью `for...of`

На каждой итерации вычисляю дистанцию между указанными координатами (coord)
и координатами итерируемого объекта

Сравниваю индекс

*/

/*
const getTheNearestLocation = (locations, coord) => {

};

console.log(getTheNearestLocation(locations, currentPoint));
*/
