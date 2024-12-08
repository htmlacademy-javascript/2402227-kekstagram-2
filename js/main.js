import { renderPictures } from './modules/render-pictures.js';
import { initUploadModal } from './modules/upload-photo-form.js';
import { validateForm } from './modules/validate-form.js';
import { initScale } from './modules/photo-transform.js';
import { initSlider } from './modules/slider-effects.js';
import { getData } from './modules/api.js';
import { showDownloadError } from './modules/message.js';
import { configFilter } from './modules/filter.js';

getData()
  .then((data) => {
    renderPictures(data);
    configFilter(data);
  })
  .catch((error) => {
    showDownloadError(error.message);
  });

initUploadModal();
validateForm();
initScale();
initSlider();
