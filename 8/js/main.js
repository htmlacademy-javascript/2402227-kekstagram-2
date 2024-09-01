import { renderPictures } from './modules/render-pictures.js';
import { createData } from './modules/data-pictures.js';

const createdPictures = createData();
renderPictures(createdPictures);
