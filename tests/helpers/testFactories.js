/* eslint-disable import/prefer-default-export */
import LikeButtonPresenter from '../../src/scripts/utility/like-button-presenter';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    resto,
  });
};

export { createLikeButtonPresenterWithResto };
