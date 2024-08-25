import {isEscapeKey} from './utils.js';

const bigPictureModalElement = document.querySelector('.big-picture');
const closeBigPictureModalElement = bigPictureModalElement.querySelector('.big-picture__cancel');
const bigPictureImage = bigPictureModalElement.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikes = bigPictureModalElement.querySelector('.likes-count');
const bigPictureShownComments = bigPictureModalElement.querySelector('.social__comment-shown-count');
const bigPictureTotalComments = bigPictureModalElement.querySelector('.social__comment-total-count');
const bigPictureDescription = bigPictureModalElement.querySelector('.social__caption');


const template = document.querySelector('#comment').content.querySelector('.social__comment');
const commentListElement = document.querySelector('.social__comments');
// console.log(bigPictureShownComments);

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPictureModal();
  }
};

const renderComments = (comments) => {
  comments.forEach((comment) => {
    const templateComment = template.cloneNode(true);
    const image = templateComment.querySelector('.social__picture');

    image.src = comment.avatar;
    image.alt = comment.name;

    templateComment.querySelector('.social__text').textContent = comment.message;

    commentListElement.appendChild(templateComment);
  });
};

const renderBigPictureModalElement = (photo) => {
  bigPictureImage.src = photo.url;
  bigPictureLikes.textContent = photo.likes;
  bigPictureShownComments.textContent = 2;
  bigPictureTotalComments.textContent = photo.comments.length;
  bigPictureDescription.textContent = photo.description;

  renderComments(photo.comments);
};

// Open
function openBigPictureModal(photo) {
  renderBigPictureModalElement(photo);
  bigPictureModalElement.classList.remove('hidden');

  document.addEventListener('keydown', onDocumentKeydown);
}

// Close
function closeBigPictureModal() {
  bigPictureModalElement.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
}

closeBigPictureModalElement.addEventListener('click', () => {
  closeBigPictureModal();
});

// Open modal from allpreview
const addEventListenerToBigPicture = (photos) => {
  const pictureElements = document.querySelectorAll('.picture');
  // console.log(pictureElements);
  // console.log(photos);

  for(let i = 0; i < photos.length; i++) {
    pictureElements[i].addEventListener('click', () => {
      openBigPictureModal(photos[i]);
    });
  }
};

export { addEventListenerToBigPicture, openBigPictureModal };
