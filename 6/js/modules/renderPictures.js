
import { createData } from './dataPictures.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

function renderPictures() {
  const render = createData();

  render.forEach((photo) => {
    const templatePicture = template.cloneNode(true);
    const image = templatePicture.querySelector('.picture__img');

    image.src = photo.url;
    image.alt = photo.description;

    templatePicture.querySelector('.picture__comments').textContent = photo.comments.length;
    templatePicture.querySelector('.picture__likes').textContent = photo.likes;

    container.appendChild(templatePicture);
  });
}

export { renderPictures };
