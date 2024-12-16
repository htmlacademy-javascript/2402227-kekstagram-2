import { isEscapeKey } from './utils.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorDownloadTemplate = document.querySelector('#data-error').content.querySelector('.data-error');

const onSuccessElementClick = (evt) => {
  if (evt.target.classList.contains('success') || evt.target.classList.contains('success__button')) {
    closeMessage('.success');
  }
};

const onShowErrorElementClick = (evt) => {
  if (evt.target.classList.contains('error') || evt.target.classList.contains('error__button')) {
    closeMessage('.error');
  }
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if (document.body.classList.contains('data-error')) {
      closeMessage('.error');
    } else {
      closeMessage('.success');
    }
  }
};

function closeMessage(selector) {
  const messageElement = document.querySelector(selector);
  if (messageElement) {
    messageElement.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
    document.body.classList.remove('data-error');
  }
}

const showSuccess = () => {
  const successElement = successTemplate.cloneNode(true);
  document.body.appendChild(successElement);

  document.addEventListener('keydown', onDocumentKeydown);
  successElement.addEventListener('click', onSuccessElementClick);
};

const showError = () => {
  const showErrorElement = errorTemplate.cloneNode(true);
  document.body.appendChild(showErrorElement);
  document.body.classList.add('data-error');

  document.addEventListener('keydown', onDocumentKeydown);
  showErrorElement.addEventListener('click', onShowErrorElementClick);
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
