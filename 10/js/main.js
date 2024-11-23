import { renderPictures } from './modules/render-pictures.js';
import { createData } from './modules/data-pictures.js';
import { initUploadModal } from './modules/upload-photo-form.js';
import { validateForm } from './modules/validate-form.js';
import { initScale } from './modules/photo-transform.js';
import { initSlider } from './modules/slider-effects.js';

const createdPictures = createData();
renderPictures(createdPictures);

initUploadModal();
validateForm();
initScale();
initSlider();
