import { getPhotos } from './getPhotos.js';

// На основе временных данных для разработки и шаблона #picture -> нашла шаблон 199 строка <!-- Шаблон изображения случайного пользователя --> <template id="picture">
const template = document.querySelector('#picture').content.querySelector('.picture');

// создайте DOM-элементы, соответствующие фотографиям, и заполните их данными

// const photo = getPhotos();

const arrayPhotos = (photo) => {
  for (let i = 0; i < getPhotos.length; i++) {
    const image = template.querySelector('.picture__img');
    image.src = photo.url;
    image.alt = photo.description;
    template.querySelector('.picture__comments').textContent = photo.comments;
    template.querySelector('.picture__likes').textContent = photo.likes;

    const templatePicture = document.querySelector('.pictures');
    templatePicture.appendChild(template);

    return templatePicture;
  }

  return arrayPhotos;
};

arrayPhotos();
