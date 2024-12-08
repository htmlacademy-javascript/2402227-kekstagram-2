import { DEBOUNCE_DELAY } from './const.js';

const isEscapeKey = (evt) => evt.key === 'Escape';

const debounce = (callback, timeoutDelay = DEBOUNCE_DELAY) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), timeoutDelay);
  };
};

export { isEscapeKey, debounce };

// код больше не используется (удалить позже)
// const getRandomInteger = (a, b) => {
//   const lower = Math.ceil(Math.min(a, b));
//   const upper = Math.floor(Math.max(a, b));
//   const result = Math.random() * (upper - lower + 1) + lower;

//   return Math.floor(result);
// };

// const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
