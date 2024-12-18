import { renderPictures } from './render-pictures.js';
import { FILTER, MAX_PICTURES_COUNT, DEBOUNCE_DELAY} from './const.js';
import { applyDebounce } from './utils.js';

const filterElement = document.querySelector('.img-filters');
const pictureListElement = document.querySelector('.pictures');
const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';

let pictures = [];
let currentFilter = FILTER.default;

const clearPicture = () => {
  pictureListElement.querySelectorAll('a.picture').forEach((item) => item.remove());
};

const applyFilter = () => {
  let filteredPictures = [];

  switch (currentFilter) {
    case FILTER.default:
      filteredPictures = [...pictures];
      break;
    case FILTER.random:
      filteredPictures = [...pictures]
        .sort(() => 0.5 - Math.random())
        .slice(0, MAX_PICTURES_COUNT);
      break;
    case FILTER.discussed:
      filteredPictures = [...pictures]
        .sort((a, b) => b.comments.length - a.comments.length);
      break;
    default:
      filteredPictures = [...pictures];
      break;
  }

  clearPicture();
  renderPictures(filteredPictures);
};

const onFilterChange = (evt) => {
  const targetButton = evt.target;
  const activeButton = document.querySelector(`.${ACTIVE_BUTTON_CLASS}`);

  if (!evt.target.id || evt.target.classList.contains(ACTIVE_BUTTON_CLASS)) {
    return;
  }

  activeButton.classList.remove(ACTIVE_BUTTON_CLASS);
  targetButton.classList.add(ACTIVE_BUTTON_CLASS);

  currentFilter = targetButton.id;
  applyFilter();
};

const configFilter = (picturesData) => {
  pictures = picturesData;
  filterElement.classList.remove('img-filters--inactive');
  filterElement.addEventListener('click', applyDebounce(onFilterChange, DEBOUNCE_DELAY));
};

export { configFilter };
