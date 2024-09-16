import {isEscapeKey} from './utils.js';

const pageBody = document.querySelector('body');

const imageUploadForm = document.querySelector('.img-upload__form');
const uploadFileControl = imageUploadForm.querySelector('#upload-file');
const imageUploadOverlay = imageUploadForm.querySelector('.img-upload__overlay');
const imageUploadCancelButton = imageUploadOverlay.querySelector('#upload-cancel');

// Закрытие модального окна -------------------------------------------------------------------
const onImageUploadCancelButtonClick = () => {
  closeImageEditor();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeImageEditor();
  }
};

function closeImageEditor () {
  imageUploadOverlay.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  imageUploadCancelButton.removeEventListener('click', onImageUploadCancelButtonClick);
  uploadFileControl.value = '';
}

// Начало загрузки файла и открытие модального окна -------------------------------------------
const startUploadModal = () => {
  uploadFileControl.addEventListener('change', () => {
    imageUploadOverlay.classList.remove('hidden');
    pageBody.classList.add('modal-open');
    imageUploadCancelButton.addEventListener('click', onImageUploadCancelButtonClick);
    document.addEventListener('keydown', onDocumentKeydown);
  });
};

export { startUploadModal };
