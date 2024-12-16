import { renderPictures } from './modules/render-pictures.js';
import { setupUploadModal } from './modules/upload-photo-form.js';
import { validateForm } from './modules/validate-form.js';
import { setupScale } from './modules/photo-transform.js';
import { setupSlider } from './modules/slider-effects.js';
import { getData } from './modules/api.js';
import { showDownloadError } from './modules/message.js';
import { setupFilter } from './modules/filter.js';

getData()
  .then((data) => {
    renderPictures(data);
    setupFilter(data);
  })
  .catch((error) => {
    showDownloadError(error.message);
  });

setupUploadModal();
validateForm();
setupScale();
setupSlider();
