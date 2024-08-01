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

// Задача 5

// извлечь время из строки и преобразовать в число
const getTime = (time) => {
  const hours = parseInt(time.split(':')[0], 10);
  const minutes = parseInt(time.split(':')[1], 10);

  return { hours, minutes };
};

// перевести часы в минуты
const getMinutesTime = (time) => {
  const { hours, minutes } = getTime(time);
  const minutesLength = hours * 60 + minutes;

  return minutesLength;
};

// вычислить длительность митинга
const getMeetingDuration = (meetingStartTime, meetingLengthTime) => {
  const meetingStartMinutes = getMinutesTime(meetingStartTime);
  const meetingEndMinutes = meetingStartMinutes + meetingLengthTime;

  return meetingEndMinutes;
};

// основная функция
const workingHours = (workingStartTime, workingEndTime, meetingStartTime, meetingLengthTime) => {
  const startWorkingHours = getMinutesTime(workingStartTime);
  const endWorkingHours = getMinutesTime(workingEndTime);
  const meetingStartMinutes = getMinutesTime(meetingStartTime);
  const meetingEndMinutes = getMeetingDuration(meetingStartTime, meetingLengthTime);

  // условие проверки
  if (meetingEndMinutes <= endWorkingHours && meetingStartMinutes) {
    return true;
  } else {
    return false;
  }
};


workingHours('08:00', '17:30', '14:00', 90);
workingHours('8:0', '10:0', '8:0', 120);
workingHours('08:00', '14:30', '14:00', 90);
workingHours('14:00', '17:30', '08:0', 90);
workingHours('8:00', '17:30', '08:00', 900);
