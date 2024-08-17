import { NAMES, MESSAGES, DESCRIPTIONS } from './dataset.js';
import { getRandomInteger, getRandomArrayElement } from './utils.js';

const PHOTOS_NUMBER = 25;

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;

const MIN_AVATAR_NUMBER = 1;
const MAX_AVATAR_NUMBER = 6;

let commentCount = 0;

const getCommentId = () => {
  commentCount += 1;

  return commentCount;
};

const createComment = () => {
  const name = getRandomArrayElement(NAMES);
  const photoMassage = getRandomArrayElement(MESSAGES);

  return {
    id: getCommentId(),
    avatar: `img/avatar-${ getRandomInteger(MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER) }.svg`,
    message: photoMassage,
    name: name,
  };
};

const createPhoto = (id) => {
  const description = getRandomArrayElement(DESCRIPTIONS);
  const numberComments = getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);

  return {
    id: id,
    url: `photos/${ id }.jpg`,
    description: description,
    likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
    comments: Array.from({length: numberComments}, createComment),
  };
};

/**создания массива из 25 сгенерированных объектов.  */

const createData = () => {
  const photos = [];

  for (let i = 0; i < PHOTOS_NUMBER; i++) {
    photos.push(createPhoto(i + 1));
  }

  return photos;
};

export { createData };
