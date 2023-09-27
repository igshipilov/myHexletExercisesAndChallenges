/*

# Логика решения учителя:

-- Кратко и просто:
Первая попавшаяся закрывающая скобка должна соответствовать последней открывающей.

-- Подробно:
Пока мы натыкаемся на открывающие скобки, мы добавляем в stack
соответствующие им закрытые скобки – таким образом вверху stack
всегда лежит та закрывающая скобка, которую мы ожидаем увидеть следующей.

Формула: пока получаем открывающую скобку,
в stack кладём соответствующую ей закрывающую скобку.

Далее. Как только мы наткнулись на закрывающую скобку,
мы вытаскиваем из stack последнюю добавленную скобку (закрывающая)
и сравниваем её с текущим item. Они должны совпадать!
Если не совпали, значит скобки не сбалансированы -> return false.

Когда цикл пройден, в stack ничего не должно остаться –
тогда считаем полученную на вход строку сбалансированной.
Если stack.length !== 0, тогда return false

*/

// teacher's solution
/*
const isOpeningSymbol = (symbol) => openingSymbols.includes(symbol);
const getClosingSymbolFor = (symbol) => {
  for (let i = 0; i < closingSymbols.length; i += 1) {
    if (openingSymbols[i] === symbol) {
      return closingSymbols[i];
    }
  }
  return null;
};

export default (str) => {
  const stack = [];
  for (const symbol of str) {
    if (isOpeningSymbol(symbol)) {
      const closingSymbol = getClosingSymbolFor(symbol);
      stack.push(closingSymbol);
    } else {
      const lastSavedSymbol = stack.pop();
      if (symbol !== lastSavedSymbol) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
*/

// my solution
const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

const isBracketStructureBalanced = (str) => {
  if (str.length === 0) {
    return true;
  }
  const newArray = [];
  for (const item of str) {
    if (!closingSymbols.includes(item)) {
      newArray.push(item);
    } else {
      const excluded = newArray.pop();
      if (closingSymbols.indexOf(item) !== openingSymbols.indexOf(excluded)) {
        return false;
      }
    }
  } return newArray.length === 0;
};

// expected: false
// const str1 = '((';
// console.log(isBracketStructureBalanced(str1));

// const str2 = '[[()]';
// console.log(isBracketStructureBalanced(str2));

// const str3 = '({}}[]';
// console.log(isBracketStructureBalanced(str3));

// const str4 = '(<><<{[()]}>>>)';
// console.log(isBracketStructureBalanced(str4));

// const str5 = '}';
// console.log(isBracketStructureBalanced(str5));

// const str6 = '([)]';
// console.log(isBracketStructureBalanced(str6));

// const str7 = '([))';
// console.log(isBracketStructureBalanced(str7));

// expected: true
const str = '()';
console.log(isBracketStructureBalanced(str));

const str2 = '[()]';
console.log(isBracketStructureBalanced(str2));

const str3 = '({}[])';
console.log(isBracketStructureBalanced(str3));

const str4 = '(<><<{[()]}>>)';
console.log(isBracketStructureBalanced(str4));

const str5 = '';
console.log(isBracketStructureBalanced(str5));
