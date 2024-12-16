import { SCALE_STEP, MIN_SCALE, MAX_SCALE, } from './const.js';

const imageUploadForm = document.querySelector('.img-upload__form');
const scaleControlSmaller = imageUploadForm.querySelector('.scale__control--smaller');
const scaleControlBigger = imageUploadForm.querySelector('.scale__control--bigger');
const imgUploadPreview = imageUploadForm.querySelector('.img-upload__preview img');
const scaleControlValue = imageUploadForm.querySelector('.scale__control--value');

let scale = 1;

const updateScale = () => {
  imgUploadPreview.style.transform = `scale(${scale})`;
  scaleControlValue.value = `${scale * 100}%`;
};

const onSmallerClick = () => {
  if (scale > MIN_SCALE) {
    scale -= SCALE_STEP;
    updateScale();
  }
};

const onBiggerClick = () => {
  if (scale < MAX_SCALE) {
    scale += SCALE_STEP;
    updateScale();
  }
};

// Сбросить масштаб изображения
const resetScale = () => {
  scale = 1;
  updateScale();
};

const initScale = () => {
  updateScale();
  scaleControlSmaller.addEventListener('click', onSmallerClick);
  scaleControlBigger.addEventListener('click', onBiggerClick);
};

export { initScale, resetScale };
