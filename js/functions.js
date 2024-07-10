// Задача 1 - Функция для проверки длины строки -------------------------------------------------------------------------------------------------------------------------------------------------------
const getLength = function (string, symbolsNumber) {
  if (string.length <= symbolsNumber) {
    return true;
  } else {
    return false;
  }
};

getLength('проверяемая строка', 20);
getLength('проверяемая строка', 18);
getLength('проверяемая строка', 10);

// Задача 2 - Функция для проверки, является ли строка палиндромом -------------------------------------------------------------------------------------------------------------------------------
const isPolindrom = function (string = '') {
  // Привести строку к верхнему (метод toUpperCase()) или к нижнему (метод toLowerCase()) регистру
  string = string.toUpperCase();
  // записать полученную строку в новую переменную
  const upperCaseString = string;
  // Создать новую пустую строку и сохранить её в ещё одну переменную.
  let newString = '';
  // Создать цикл for, переменная-счётчик которого отсчитывает порядковые номера (индексы) символов в «нормализованной» строке с конца к началу
  for (let i = upperCaseString.length - 1; i >= 0; i--) {
    // В теле цикла на каждой итерации получать очередной символ «нормализованной» строки (с помощью квадратных скобок или метода at()).
    const currentSymbol = upperCaseString.at(i);
    // С помощью оператора += дозаписать этот символ в созданную на втором шаге строку.
    newString += currentSymbol;
  }

  // Сравнить
  return newString === upperCaseString;
};

isPolindrom('топот');
isPolindrom('ДовОд');
isPolindrom('Кекс');

// Задача 3 - Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN.
const getNumber = function (string = '') {
  // метод toString() — на случай, если в качестве параметра пришло число
  string = string.toString();
  // Новая пустая строка для цифр
  let newString = '';
  // цикл — для перебора полученной строки
  for (let i = 0; i < string.length; i++) {
    const currentSymbol = string[i];
    // проверить символ - является ли цифрой
    if (!isNaN(parseInt(currentSymbol, 10))) {
      // добавить цифру к строке
      newString += currentSymbol;
    }
  }
  // функция parseInt() — для превращения в число отдельных символов и результирующей строки
  const intValue = parseInt(newString, 10);
  // функция Number.isNaN() — чтобы проверить, получилось ли превратить символ в число
  return isNaN(intValue) ? NaN : intValue;
};

getNumber('2023 год');
getNumber('ECMAScript 2022');
getNumber('1 кефир, 0.5 батона');
getNumber('агент 007');
getNumber('а я томат');
