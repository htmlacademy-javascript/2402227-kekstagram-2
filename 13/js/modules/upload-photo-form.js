import { isEscapeKey } from './utils.js';
import { validateForm, resetValidator, textHashtagsInput, textCommentInput } from './validate-form.js';
import { resetScale } from './photo-transform.js';
import { setupSlider, resetEffect } from './slider-effects.js';
import { getData, sendFormData } from './api.js';
import { showSuccess, showError, showDownloadError } from './message.js';
import { FILE_EXTENSIONS } from './const.js';

const imageUploadForm = document.querySelector('.img-upload__form');
const uploadFileControl = imageUploadForm.querySelector('#upload-file');
const imageUploadOverlay = imageUploadForm.querySelector('.img-upload__overlay');
const imageUploadSubmit = imageUploadForm.querySelector('.img-upload__submit');
const imageUploadCancelButton = imageUploadOverlay.querySelector('#upload-cancel');
const imgUploadWrapper = document.querySelector('.img-upload__wrapper');
const imgUploadPreview = imgUploadWrapper.querySelector('.img-upload__preview img');
const imgEffectsPreview = document.querySelectorAll('.effects__preview');


const SubmitButtonText = {
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

const handleFormSubmit = async (evt) => {
  evt.preventDefault();
  const isValid = validateForm();

  if (!isValid) {
    return;
  }

  disableButton(SubmitButtonText.SENDING);

  try {
    await sendFormData(new FormData(evt.target));
    showSuccess();
    closeUploadModal();
  } catch (error) {
    showError();
  } finally {
    enableButton(SubmitButtonText.IDLE);
  }
};

const catchDownloadError = (message) => {
  showDownloadError(message);
};

const handleImageUploadCancelButtonClick = () => {
  closeUploadModal();
};

const handleDocumentKeydown = (evt) => {
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
  document.removeEventListener('keydown', handleDocumentKeydown);
  imageUploadCancelButton.removeEventListener('click', handleImageUploadCancelButtonClick);
  uploadFileControl.value = '';

  textHashtagsInput.value = '';
  textCommentInput.value = '';

  resetValidator();
  resetScale();
  resetEffect();
}

// Начало загрузки файла и открытие модального окна -------------------------------------------
const handleFileInputChange = () => {
  const file = uploadFileControl.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_EXTENSIONS.some((type) => fileName.endsWith(type));

  if (matches) {
    const url = URL.createObjectURL(file);
    imgUploadPreview.src = url;
    imgEffectsPreview.forEach((item) => {
      item.style.backgroundImage = `url(${url})`;
    });
  } else {
    showError();
  }
};

const setupUploadModal = () => {
  uploadFileControl.addEventListener('change', handleFileInputChange);
  uploadFileControl.addEventListener('change', openUploadModal);
  imageUploadForm.addEventListener('submit', handleFormSubmit);
  getData().catch((error) => catchDownloadError(error.message));
};

function openUploadModal() {
  imageUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  imageUploadCancelButton.addEventListener('click', handleImageUploadCancelButtonClick);
  document.addEventListener('keydown', handleDocumentKeydown);

  setupSlider();

  resetValidator();
  resetScale();
  resetEffect();
}

export { setupUploadModal };
