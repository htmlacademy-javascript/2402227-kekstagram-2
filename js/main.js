import { renderPictures } from './modules/renderPictures.js';
import { createData } from './modules/dataPictures.js';
import { addEventListenerToBigPicture, openBigPictureModal } from './modules/fullSizePicture.js';

const createdPictures = createData();
renderPictures(createdPictures);

openBigPictureModal(createdPictures[0]);

addEventListenerToBigPicture(createdPictures);
