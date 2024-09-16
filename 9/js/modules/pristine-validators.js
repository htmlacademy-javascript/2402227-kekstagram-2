// Переменные: хештег и коммент
const imageUploadForm = document.querySelector('.img-upload__form');
const textHashtagsInput = imageUploadForm.querySelector('.text__hashtags');
//const textDescriptionInput = imageUploadForm.querySelector('.text__description');

const MAX_HASHTAGS = 5;
const MAX_SYMBOLS = 20;

const pristine = new Pristine(imageUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
});

// Разделение строки на массив + нечувствителен к регистру--------------------------------------
const parseHashtags = (value) => value.trim().toLowerCase().split(/\s+/);

const hashtagValidators = [
  {
    'errorMessage': 'Xэштег должен начинаться с символа #',
    'validator': (value) => {
      const hashtags = parseHashtags(value);
      if (hashtags.length === 0) {
        return true;
      }

      for (let i = 0; i < hashtags.length; i++) {
        if (hashtags[i][0] !== '#') {
          return false;
        }
      }
      return true;
    }
  },
  {
    'errorMessage': 'Хештег должен состоять из букв и чисел и не может содержать пробелы, спецсимволы, символы пунктуации, эмодзи и т.д.',
    'validator': (value) => {
      const hashtags = parseHashtags(value);
      for (let i = 0; i < hashtags.length; i++) {
        if (!/^#[a-za-яё0-9]+$/i.test(hashtags[i])) {
          return false;
        }
      }
      return true;
    }
  },
  {
    'errorMessage': 'Хэштеги должны разделяться пробелами',
    'validator': (value) => {
      const hasSpacehashtags = /#{2,}/.test(value);
      if (hasSpacehashtags) {
        return false;
      }
      return true;
    }
  },
  {
    'errorMessage': 'Один и тот же хэштег не может быть использован дважды',
    'validator': (value) => {
      const hashtags = parseHashtags(value);
      const uniqueHashtags = new Set(hashtags);
      if (hashtags.length !== uniqueHashtags.size) {
        return false;
      }
      return true;
    }
  },
  {
    'errorMessage': `Нельзя указать больше ${MAX_HASHTAGS} хэштегов`,
    'validator': (value) => {
      const hashtags = parseHashtags(value);
      if (hashtags.length > MAX_HASHTAGS) {
        return false;
      }
      return true;
    }
  },
  {
    'errorMessage': `Максимальная длина одного хештега - ${MAX_SYMBOLS} символов, включая решетку`,
    'validator': (value) => {
      const hashtags = parseHashtags(value);
      for (let i = 0; i < hashtags.length; i++) {
        if (hashtags[i].length > MAX_SYMBOLS) {
          return false;
        }
      }
      return true;
    }
  },
  {
    'errorMessage': 'Xэштеги необязательны',
    'validator': (value) => {
      if (value === '') {
        return true;
      }
      return true;
    }
  },
];

hashtagValidators.forEach((elem) => {
  pristine.addValidator(textHashtagsInput, elem.validator, elem.errorMessage, 1, false);
});

// pristine.addValidator(textDescriptionInput, (value) => {
//   console.log(/\d/.test(value));
// });

export { hashtagValidators };
