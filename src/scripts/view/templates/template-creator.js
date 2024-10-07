const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa-solid fa-plus"></i> <span>Add to Favorite</span>
  </button>
`;
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likedButton" class="like">
    <i class="fa-solid fa-check"></i> <span>Favorited</span>
  </button>
`;
export {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
