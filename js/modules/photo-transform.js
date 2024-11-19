

const SCALE_STEP = 0.25;
const MIN_SCALE = 0.25;
const MAX_SCALE = 1;

const imageUploadForm = document.querySelector('.img-upload__form');
const scaleControlSmaller = imageUploadForm.querySelector('.scale__control--smaller');
const scaleControlBigger = imageUploadForm.querySelector('.scale__control--bigger');
const imgUploadPreview = imageUploadForm.querySelector('.img-upload__preview img');
const scaleControlValue = imageUploadForm.querySelector('.scale__control--value');

let scale = 1;

// Update the scale of the img
const updateScale = () => {
  imgUploadPreview.style.transform = `scale(${scale})`;
  scaleControlValue.value = `${scale * 100}%`;
};

// SmallerButton click
const onSmallerClick = () => {
  if (scale > MIN_SCALE) {
    scale -= SCALE_STEP;
    updateScale();
  }
};

//BiggerButton click
const onBiggerClick = () => {
  if (scale < MAX_SCALE) {
    scale += SCALE_STEP;
    updateScale();
  }
};

//Event listeners to the buttons
scaleControlSmaller.addEventListener('click', onSmallerClick);
scaleControlBigger.addEventListener('click', onBiggerClick);

// Initial scale value
document.addEventListener('DOMContentLoaded', updateScale);

export { onSmallerClick, onBiggerClick };
