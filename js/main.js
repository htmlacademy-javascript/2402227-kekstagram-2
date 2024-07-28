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


const MESSAGE = [
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
  'Рабочее фото'
];

const PHOTOS_NUMBER = 25;
let COMMENT_COUNT = 0;

const getCommentId = () => {
  COMMENT_COUNT += 1;
  return COMMENT_COUNT;
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
  const photoMassage = getRandomArrayElement(MESSAGE);
  return {
    id: getCommentId(),
    avatar: `img/avatar-${ getRandomInteger(1, 6) }.svg`,
    message: photoMassage,
    name: name,
  };
};

const createPhoto = (id) => {
  const description = getRandomArrayElement(DESCRIPTIONS);
  const numberComments = getRandomInteger(0, 30);
  return {
    id: id,
    url: `photos/${ id }.jpg`,
    description: description,
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: numberComments}, createComment),
  };
};

/**создания массива из 25 сгенерированных объектов.  */
const photos = [];
for (let i = 1; photos.length < PHOTOS_NUMBER; i++) {
  photos.push(createPhoto(i));
}
