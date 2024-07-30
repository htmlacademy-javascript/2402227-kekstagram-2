const NAMES = [
  'Антон',
  'Александра',
  'Артём',
  'София',
  'Матвей',
  'Анна',
  'Иван',
  'Полина',
  'Тимофей',
  'Ксения',
  'Кирилл',
  'Дарья',
  'Арсений',
  'Елизавета',
  'Андрей',
  'Злата',
  'Сергей',
  'Виктория',
  'Елисей',
  'Мария',
  'Олег',
  'Анастасия',
  'Макар',
  'Алиса',
];


const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Личное фото',
  'Рабочее фото',
  'Семейное фото',
  'Детское фото'
];

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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];


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

const getPhotos = () => {
  const photos = [];

  for (let i = 0; i < PHOTOS_NUMBER; i++) {
    photos.push(createPhoto(i));
  }

  return photos;
};

getPhotos();
