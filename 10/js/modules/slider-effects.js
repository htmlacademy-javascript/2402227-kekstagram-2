const imgUploadWrapper = document.querySelector('.img-upload__wrapper');
const sliderElement = imgUploadWrapper.querySelector('.effect-level__slider');
const effectLevel = imgUploadWrapper.querySelector('.img-upload__effect-level');
const effectLevelValue = imgUploadWrapper.querySelector('.effect-level__value');
const imgUploadPreview = imgUploadWrapper.querySelector('.img-upload__preview img');
const imageUploadForm = document.querySelector('.img-upload__form');
const effectList = imageUploadForm.querySelector('.effects__list');

const DEFAULT_EFFECT = 'none';

const EFFECTS = {
  none: {
    filter: 'none',
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    unit: '',
  },
  chrome: {
    filter: 'grayscale',
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    unit: '',
  },
  sepia: {
    filter: 'sepia',
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    unit: '',
  },
  marvin: {
    filter: 'invert',
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    unit: '%'
  },
  phobos: {
    filter: 'blur',
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
    unit: 'px',
  },
  heat: {
    filter: 'brightness',
    range: {
      min: 1,
      max: 3,
    },
    step: 0.1,
    unit: '',
  },
};

// Эффект фильтрации картинки
const applyFilter = (effect, value) => {
  const { filter, unit } = EFFECTS[effect];
  imgUploadPreview.style.filter = `${filter}(${value}${unit})`;
  effectLevelValue.value = value;
};

const updateSlider = (effect) => {
  if (effect === 'none') {
    imgUploadPreview.style.filter = 'none';
    effectLevel.classList.add('hidden');
    effectLevelValue.value = '';
    sliderElement.noUiSlider.set(0);

    return;
  }

  effectLevel.classList.remove('hidden');
  const { range, step } = EFFECTS[effect];

  sliderElement.noUiSlider.updateOptions({
    range: range,
    step: step,
    start: range.max,
  });

  sliderElement.noUiSlider.set(range.max);
};

const onEffectChange = (evt) => {
  const effect = evt.target.value;
  updateSlider(effect);

  sliderElement.noUiSlider.on('update', (values, handle) => {
    const value = values[handle];

    applyFilter(effect, value);
  });
};

const resetEffect = () => {
  const defaultRadio = imageUploadForm.querySelector(`#effect-${DEFAULT_EFFECT}`);
  defaultRadio.checked = true;
  updateSlider(DEFAULT_EFFECT);
};

const initSlider = () => {
  noUiSlider.create(sliderElement, {
    start: 100,
    connect: 'lower',
    range: {
      'min': 0,
      'max': 100,
    },
    step: 1,
    format: {
      to: (value) => Number.isInteger(value)
        ? value.toFixed(0)
        : value.toFixed(1),
      from: (value) => parseFloat(value),
    },
  });

  effectList.addEventListener('change', onEffectChange);
  resetEffect();
};

export { initSlider, resetEffect };
