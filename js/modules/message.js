const showSuccess = () => {
  const successTemplate = document.querySelector('#success').content.querySelector('.success');
  const successElement = successTemplate.cloneNode(true);
  document.body.appendChild(successElement);

  setTimeout(() => {
    successElement.remove();
  }, 5000);

};

const showError = (message) => {
  const errorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
  const errorElement = errorTemplate.cloneNode(true);
  errorElement.querySelector('.data-error__title').textContent = message;
  document.body.appendChild(errorElement);

  setTimeout(() => {
    errorElement.remove();
  }, 5000);
};

export { showSuccess, showError };
