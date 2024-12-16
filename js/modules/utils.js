import { DEBOUNCE_DELAY } from './const.js';

const isEscapeKey = (evt) => evt.key === 'Escape';

const applyDebounce = (callback, timeoutDelay = DEBOUNCE_DELAY) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), timeoutDelay);
  };
};

export { isEscapeKey, applyDebounce };
