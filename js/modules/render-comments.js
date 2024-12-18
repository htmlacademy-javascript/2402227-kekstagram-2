const COUNT_STEP = 5;
let currentCount = 0;
let comments = [];

const template = document.querySelector('#comment').content.querySelector('.social__comment');
const commentListElement = document.querySelector('.social__comments');

const bigPictureModalElement = document.querySelector('.big-picture');
const commentLoader = bigPictureModalElement.querySelector('.comments-loader');
const bigPictureShownComments = bigPictureModalElement.querySelector('.social__comment-shown-count');

const renderNextComments = () => {
  const renderedComments = comments.slice(currentCount, currentCount + COUNT_STEP);

  renderedComments.forEach((comment) => {
    const templateComment = template.cloneNode(true);
    const image = templateComment.querySelector('.social__picture');

    image.src = comment.avatar;
    image.alt = comment.name;

    templateComment.querySelector('.social__text').textContent = comment.message;

    commentListElement.appendChild(templateComment);
  });

  currentCount += renderedComments.length;
  bigPictureShownComments.textContent = currentCount;

  if (currentCount >= comments.length) {
    commentLoader.classList.add('hidden');
  } else {
    commentLoader.classList.remove('hidden');
  }
};

const onCommentLoaderClick = () => renderNextComments();

const renderComments = (commentList) => {
  comments = commentList;
  renderNextComments();

  commentLoader.addEventListener('click', onCommentLoaderClick);
};

const clearComments = () => {
  currentCount = 0;
  commentListElement.innerHTML = '';
  commentLoader.removeEventListener('click', onCommentLoaderClick);
};

export { renderComments, clearComments };
