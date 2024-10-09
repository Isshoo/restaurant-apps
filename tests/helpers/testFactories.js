/* eslint-disable import/prefer-default-export */
import LikeButtonPresenter from '../../src/scripts/utility/like-button-presenter';
import FavoriteRestoIdb from '../../src/scripts/datas/favorite-resto-idb';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteResto: FavoriteRestoIdb,
    resto,
  });
};

export { createLikeButtonPresenterWithResto };
