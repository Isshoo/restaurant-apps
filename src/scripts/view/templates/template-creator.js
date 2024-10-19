const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i>&#10133;</i> <span>Add to Favorite</span>
  </button>
`;
const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likedButton" class="like">
    <i>&#10004;</i> <span>Favorited</span>
  </button>
`;
export {
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
