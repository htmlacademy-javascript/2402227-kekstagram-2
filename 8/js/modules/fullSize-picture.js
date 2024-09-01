import {isEscapeKey} from './utils.js';
import { renderComments, clearComments } from './render-comments.js';

const bigPictureModalElement = document.querySelector('.big-picture');
const closeBigPictureModalElement = bigPictureModalElement.querySelector('.big-picture__cancel');
const bigPictureImage = bigPictureModalElement.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikes = bigPictureModalElement.querySelector('.likes-count');
const bigPictureShownComments = bigPictureModalElement.querySelector('.social__comment-shown-count');
const bigPictureTotalComments = bigPictureModalElement.querySelector('.social__comment-total-count');
const bigPictureDescription = bigPictureModalElement.querySelector('.social__caption');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPictureModal();
  }
};

const renderBigPictureModalElement = (photo) => {
  bigPictureImage.src = photo.url;
  bigPictureLikes.textContent = photo.likes;
  bigPictureShownComments.textContent = 5;
  bigPictureTotalComments.textContent = photo.comments.length;
  bigPictureDescription.textContent = photo.description;

  clearComments();
  renderComments(photo.comments);
};

// Open
const openBigPictureModal = (photo) => {
  renderBigPictureModalElement(photo);
  bigPictureModalElement.classList.remove('hidden');
  document.body.classList.add('.modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
};

// Close
function closeBigPictureModal() {
  bigPictureModalElement.classList.add('hidden');
  document.body.classList.remove('.modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
}

closeBigPictureModalElement.addEventListener('click', () => {
  closeBigPictureModal();
});

export { openBigPictureModal };
