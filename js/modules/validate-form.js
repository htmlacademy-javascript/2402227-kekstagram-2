const MAX_HASHTAGS = 5;
const MAX_SYMBOLS = 20;
const MAX_COMMENT_LENGTH = 140;

// Переменные: хештег и коммент
const imageUploadForm = document.querySelector('.img-upload__form');
const textHashtagsInput = imageUploadForm.querySelector('.text__hashtags');
const textCommentInput = imageUploadForm.querySelector('.text__description');

const pristine = new Pristine(imageUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
});

// Разделение строки на массив + нечувствителен к регистру--------------------------------------
const parseHashtags = (value) => value.trim().toLowerCase().split(/\s+/);

const hashtagRules = [
  {
    errorMessage: 'Хештег должен начинаться с символа #, состоять из букв и чисел и не может содержать пробелы, спецсимволы, символы пунктуации, эмодзи и т.д.',
    validator: (value) => {
      if (value.trim() === '') {
        return true;
      }
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
    errorMessage: 'Хэштеги должны разделяться пробелами',
    validator: (value) => {
      const hasSpaceHashtags = /#{2,}/.test(value);

      return !hasSpaceHashtags;
    }
  },
  {
    errorMessage: 'Один и тот же хэштег не может быть использован дважды',
    validator: (value) => {
      const hashtags = parseHashtags(value);
      const uniqueHashtags = new Set(hashtags);

      return hashtags.length === uniqueHashtags.size;
    }
  },
  {
    errorMessage: `Нельзя указать больше ${MAX_HASHTAGS} хэштегов`,
    validator: (value) => {
      const hashtags = parseHashtags(value);

      return hashtags.length <= MAX_HASHTAGS;
    }
  },
  {
    errorMessage: `Максимальная длина одного хештега - ${MAX_SYMBOLS} символов, включая решетку`,
    validator: (value) => {
      const hashtags = parseHashtags(value);

      if (hashtags.length === 1 && hashtags[0] === '') {
        return true;
      }

      for (let i = 0; i < hashtags.length; i++) {
        return hashtags[i].length <= MAX_SYMBOLS;
      }
    }
  },
];

const validateForm = () => {
  hashtagRules.forEach((elem) => {
    pristine.addValidator(textHashtagsInput, elem.validator, elem.errorMessage, 1, true);
  });

  pristine.addValidator(textCommentInput, (value) => value === '' || value.length <= MAX_COMMENT_LENGTH,
    `Длина комментария не может составлять больше ${MAX_COMMENT_LENGTH} символов`
  );

  return pristine.validate();
};

const resetValidator = () => {
  pristine.reset();
};

export { validateForm, resetValidator, textHashtagsInput, textCommentInput };
