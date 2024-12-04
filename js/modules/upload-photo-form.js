import { isEscapeKey } from './utils.js';
import { validateForm, resetValidator, textHashtagsInput, textCommentInput } from './validate-form.js';
import { resetScale } from './photo-transform.js';
import { resetEffect } from './slider-effects.js';
import { getData, sendFormData } from './api.js';
import { showSuccess, showError, showDownloadError } from './message.js';

const imageUploadForm = document.querySelector('.img-upload__form');
const uploadFileControl = imageUploadForm.querySelector('#upload-file');
const imageUploadOverlay = imageUploadForm.querySelector('.img-upload__overlay');
const imageUploadSubmit = imageUploadForm.querySelector('.img-upload__submit');
const imageUploadCancelButton = imageUploadOverlay.querySelector('#upload-cancel');

const submitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...',
};

const disableButton = (text) => {
  imageUploadSubmit.disabled = true;
  imageUploadSubmit.textContent = text;
};

const enableButton = (text) => {
  imageUploadSubmit.disabled = false;
  imageUploadSubmit.textContent = text;
};

const onFormSubmit = async (evt) => {
  evt.preventDefault();
  const isValid = validateForm();

  if (!isValid) {
    return;
  }

  disableButton(submitButtonText.SENDING);

  try {
    await sendFormData(new FormData(evt.target));
    showSuccess();
    closeUploadModal();
  } catch (error) {
    showError();
  } finally {
    enableButton(submitButtonText.IDLE);
  }
};

const onDownloadError = (message) => {
  showDownloadError(message);
};

const onImageUploadCancelButtonClick = () => {
  closeUploadModal();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();

    if(document.activeElement === textHashtagsInput || document.activeElement === textCommentInput) {
      evt.stopPropagation();
    } else {
      closeUploadModal();
    }
  }
};

function closeUploadModal () {
  imageUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  imageUploadCancelButton.removeEventListener('click', onImageUploadCancelButtonClick);
  uploadFileControl.value = '';
  resetValidator();
  resetScale();
  resetEffect();
}

// Начало загрузки файла и открытие модального окна -------------------------------------------
const initUploadModal = () => {
  uploadFileControl.addEventListener('change', openUploadModal);
  imageUploadForm.addEventListener('submit', onFormSubmit);
  getData().catch((error) => onDownloadError(error.message));
};

function openUploadModal() {
  imageUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  imageUploadCancelButton.addEventListener('click', onImageUploadCancelButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
  resetValidator();
  resetScale();
  resetEffect();
}

export { initUploadModal };
