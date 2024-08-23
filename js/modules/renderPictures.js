const template = document.querySelector('#picture').content.querySelector('.picture');
const pictureListElement = document.querySelector('.pictures');

const pictureListFragment = document.createDocumentFragment();

const renderPictures = (pictures) => {
  pictures.forEach((photo) => {
    const templatePicture = template.cloneNode(true);
    const image = templatePicture.querySelector('.picture__img');

    image.src = photo.url;
    image.alt = photo.description;

    templatePicture.querySelector('.picture__comments').textContent = photo.comments.length;
    templatePicture.querySelector('.picture__likes').textContent = photo.likes;

    pictureListFragment.appendChild(templatePicture);
  });

  pictureListElement.appendChild(pictureListFragment);
};

export { renderPictures };
