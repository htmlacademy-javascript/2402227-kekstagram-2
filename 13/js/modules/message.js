import { isEscapeKey } from './utils.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorDownloadTemplate = document.querySelector('#data-error').content.querySelector('.data-error');

let isPopupOpen = false;

const getSuccessElementClick = (evt) => {
  if (evt.target.classList.contains('success') || evt.target.classList.contains('success__button')) {
    closeMessage('.success');
  }
};

const getErrorElementClick = (evt) => {
  if (evt.target.classList.contains('error') || evt.target.classList.contains('error__button')) {
    closeMessage('.error');
  }
};

const handleDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();

    if(isPopupOpen) {
      const errorPopup = document.querySelector('.error');
      if (errorPopup) {
        errorPopup.remove();
        isPopupOpen = false;
        evt.stopPropagation();

        return;
      }

      const successPopup = document.querySelector('.success');
      if(successPopup) {
        successPopup.remove();
        isPopupOpen = false;
        evt.stopPropagation();
      }
    }
  }
};

function closeMessage(selector) {
  const messageElement = document.querySelector(selector);
  if (messageElement) {
    messageElement.remove();
    isPopupOpen = false;
    document.removeEventListener('keydown', handleDocumentKeydown);
  }
}

const showSuccess = () => {
  const successElement = successTemplate.cloneNode(true);
  document.body.appendChild(successElement);

  isPopupOpen = true;
  document.addEventListener('keydown', handleDocumentKeydown);
  successElement.addEventListener('click', getSuccessElementClick);
};

const showError = () => {
  const showErrorElement = errorTemplate.cloneNode(true);
  document.body.appendChild(showErrorElement);

  isPopupOpen = true;
  document.addEventListener('keydown', handleDocumentKeydown);
  showErrorElement.addEventListener('click', getErrorElementClick);
};

const showDownloadError = (message) => {
  const errorElement = errorDownloadTemplate.cloneNode(true);
  errorElement.querySelector('.data-error__title').textContent = message;
  document.body.appendChild(errorElement);

  setTimeout(() => {
    errorElement.remove();
  }, 5000);
};

export { showSuccess, showError, showDownloadError };
