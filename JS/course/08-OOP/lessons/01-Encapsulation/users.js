/* eslint-disable import/prefer-default-export */

/*
https://ru.hexlet.io/courses/js-introduction-to-oop/lessons/encapsulation/exercise_unit

ЗАДАЧА

Реализуйте и экспортируйте функцию getMutualFriends(), которая принимает на вход двух пользователей и возвращает массив состоящий из общих друзей этих пользователей.

Интерфейс абстракции "Пользователь":

user.id – возвращает идентификатор пользователя, по которому можно его отличить от остальных.
user.getFriends() – возвращает список друзей (то есть пользователей).

РАССУЖДЕНИЕ

Мы знаем, что у user есть свойство (ключ) `friends` и это массив.
Значит, в нашей `getMutualFriends` мы можем вытащить id из user1 и из user2,
а затем объединить их в общий массив,
после чего использовать этот общий массив как дата базу и на её основе создавать
юзеров с помощью makeUser в новый (финальный) массив.

 */

// BEGIN (write your solution here)

// ============= MY =====================
import makeUser from './user.js';

// Тесты проходят, но решение НЕПРАВИЛЬНОЕ --
// мне надо не создавать новых пользователей, а вернуть
// ранее созданных

// export const getMutualFriends = (user1, user2) => {
//   const ids1 = user1.getFriends().map((friend) => friend.id);
//   const ids2 = user2.getFriends().map((friend) => friend.id);

//   const data = ids2.filter((id) => ids1.includes(id));

//   const result = data.map((id) => makeUser({ id }));

//   return result;
// };
// ======================================

// ============= TEACHER =====================
export const getMutualFriends = (user1, user2) => {
  const friends1 = user1.getFriends();
  const friends2 = user2.getFriends();

  // Тот же результат:
  const friends2Ids = friends2.map(({ id }) => id);
  return friends1.filter(({ id }) => friends2Ids.includes(id));

  // Тот же результат:
  // const friends1Ids = friends1.map(({ id }) => id);
  // return friends2.filter(({ id }) => friends1Ids.includes(id));
};
// ===========================================

// ===== TESTS =========
const user1 = makeUser({
  friends: [
    makeUser({ id: 1 }),
    makeUser({ id: 2 }), // общий друг
    makeUser({ id: 3 }), // общий друг
  ],
});
const user2 = makeUser({
  friends: [
    makeUser({ id: 2 }), // общий друг
    makeUser({ id: 3 }), // общий друг
  ],
});

console.log(getMutualFriends(user1, user2));

// const acc = [];
// acc.push(user1.friends[0].id)
// console.log(user1);
// console.log(`\n\n`);
// console.log(acc);
// ====================

// END
