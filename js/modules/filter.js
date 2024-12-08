import { renderPictures } from './render-pictures.js';
import { FILTER, SORTFUNC, MAX_PICTURES_COUNT, DEBOUNCE_DELAY} from './const.js';
import { debounce } from './utils.js';

const filterElement = document.querySelector('.img-filters');
const ACTIVE_BUTTON = 'img-filters__button--active';

let pictures = [];
let currentFilter = FILTER.default;

const applyFilter = () => {
  let filteredPictures = [];

  if (currentFilter === FILTER.default) {
    filteredPictures = [...pictures];
  } else if (currentFilter === FILTER.random) {
    filteredPictures = [...pictures]
      .sort(SORTFUNC.random)
      .slice(0, MAX_PICTURES_COUNT);
  } else if (currentFilter === FILTER.discussed) {
    filteredPictures = [...pictures]
      .sort((SORTFUNC.discussed));
  }

  renderPictures(filteredPictures);
};

const onFilterChange = (evt) => {
  const targetButton = evt.target;
  const activeButton = document.querySelector(`.${ACTIVE_BUTTON}`);
  if (!targetButton.matches('button') || activeButton === targetButton) {
    return;
  }

  activeButton.classList.remove(ACTIVE_BUTTON);
  targetButton.classList.add(ACTIVE_BUTTON);
  currentFilter = targetButton.id;

  applyFilter();
};

const configFilter = (picturesData) => {
  pictures = picturesData;
  filterElement.classList.remove('img-filters--inactive');
  filterElement.addEventListener('click', debounce(onFilterChange, DEBOUNCE_DELAY));
  pictures = picturesData;
};

export { configFilter };
