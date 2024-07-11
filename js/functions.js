// Задача 1 - Функция для проверки длины строки -------------------------------------------------------------------------------------------------------------------------------------------------------
const checkStringLength = (string, symbolsNumber) => string.length <= symbolsNumber;

checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);

// Задача 2 - Функция для проверки, является ли строка палиндромом -------------------------------------------------------------------------------------------------------------------------------
const isPalindrom = (string) => {
  const upperCaseString = string.toUpperCase();
  let newString = '';

  for (let i = upperCaseString.length - 1; i >= 0; i--) {
    const currentSymbol = upperCaseString[i];
    newString += currentSymbol;
  }

  return newString === upperCaseString;
};

isPalindrom('топот');
isPalindrom('ДовОд');
isPalindrom('Кекс');

// Задача 3 - Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN.
const parseNumber = (string) => {
  let newString = '';

  for (let i = 0; i < string.length; i++) {
    const currentSymbol = string[i];

    if (!isNaN(parseInt(currentSymbol, 10))) {
      newString += currentSymbol;
    }
  }

  const intValue = parseInt(newString, 10);

  return isNaN(intValue) ? NaN : intValue;
};

parseNumber('2023 год');
parseNumber('ECMAScript 2022');
parseNumber('1 кефир, 0.5 батона');
parseNumber('агент 007');
parseNumber('а я томат');
