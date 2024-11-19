import { renderPictures } from './modules/render-pictures.js';
import { createData } from './modules/data-pictures.js';
import { initUploadModal } from './modules/upload-photo-form.js';
import { validateForm } from './modules/validate-form.js';
import { onSmallerClick, onBiggerClick } from './modules/photo-transform.js';
import './modules/slider-effects.js';

const createdPictures = createData();
renderPictures(createdPictures);

initUploadModal();
validateForm();
onSmallerClick();
onBiggerClick();
