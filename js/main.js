import { renderPictures } from './modules/render-pictures.js';
// import { createData } from './modules/data-pictures.js'; позже удалю
import { initUploadModal } from './modules/upload-photo-form.js';
import { validateForm } from './modules/validate-form.js';
import { initScale } from './modules/photo-transform.js';
import { initSlider } from './modules/slider-effects.js';
import { getData } from './modules/api.js';
import { showError } from './modules/message.js';

//это как-будто больше не надо - позже удалить я меняю это на getData
// const createdPictures = createData();
// renderPictures(createdPictures);

getData()
  .then((data) => {
    renderPictures(data);
  })
  .catch((error) => {
    showError(error.message);
  });

initUploadModal();
validateForm();
initScale();
initSlider();
