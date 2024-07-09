// Задача 1
const getLength = (string = '', maxSymbols = 1) => string.length <= maxSymbols;

getLength();

// Задача 2
const isPalindrom = (string) => {

  string = string.replaceAll(' ', '');
  string = string.toLowerCase();

  let normalizedString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    normalizedString += string[i];
  }

  return string === normalizedString;
};

isPalindrom();

// Задача 3
const isNumber = (string = '') => {
  let result = '';

  string = string.toString();

  for (let i = 0; i <= string.length - 1; i++) {
    if (Number.isNaN(parseInt(string[i], 10)) === false) {
      result += string[i];
    }
  }

  return result === '' ? NaN : Number(result);
};

isNumber('2023 год');

// варианты задачи 1--------------------------------------------------------------------------------------
/* variant 1 - function declaration
function getLength (string = '', maxSymbols = 1) {
  return string.length <= maxSymbols;
}

getLength('some text', 20);
getLength('some text of 18 sym', 18);
getLength('some text of 18 sym', 10);
*/

/* variant 2 - function expression
const text = 'Какая-то строка больше 20 символов';
function getLengthComparison () {
  return (text.length <= 20) ? 'true' : 'false';
}

getLengthComparison(text);
*/

/* variant 2 - function expression
const text = function () {
  return (text.length <= 20) ? 'true' : 'false';
}
*/

/* variant 3 - function expression - стрелочная
const text = () => {
  return (text.length <= 20) ? 'true' : 'false';
}
*/

/*  variant 4 - if else
const length = 'Какая-то строка больше 20 символов';
  function getSymbols () {
    if (length <= 20 || length === 18) {
      return true;
    } else {
        return false;
      }
  }

getSymbols(length);
*/
