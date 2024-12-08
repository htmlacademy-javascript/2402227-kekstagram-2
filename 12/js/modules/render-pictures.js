import { openBigPictureModal } from './full-size-picture.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const pictureListElement = document.querySelector('.pictures');

const pictureListFragment = document.createDocumentFragment();

const clearPicture = () => {
  pictureListElement.querySelectorAll('a.picture').forEach((item) => item.remove());
};

const renderPictures = (pictures) => {
  clearPicture();
  pictures.forEach((photo) => {
    const templatePicture = template.cloneNode(true);
    const image = templatePicture.querySelector('.picture__img');

    image.src = photo.url;
    image.alt = photo.description;

    templatePicture.querySelector('.picture__comments').textContent = photo.comments.length;
    templatePicture.querySelector('.picture__likes').textContent = photo.likes;

    pictureListFragment.appendChild(templatePicture);

    templatePicture.addEventListener('click', () => {
      openBigPictureModal(photo);
    });
  });

  pictureListElement.appendChild(pictureListFragment);
};

export { renderPictures };
