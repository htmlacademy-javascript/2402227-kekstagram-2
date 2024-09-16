import { renderPictures } from './modules/render-pictures.js';
import { createData } from './modules/data-pictures.js';
import { startUploadModal } from './modules/uploadPhoto-form.js';
import { hashtagValidators } from './modules/pristine-validators.js';

const createdPictures = createData();
renderPictures(createdPictures);

startUploadModal();
hashtagValidators();
