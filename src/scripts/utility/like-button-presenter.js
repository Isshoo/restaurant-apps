import FavoriteRestoIdb from '../datas/favorite-resto-idb';
import { createLikeRestoButtonTemplate, createUnlikeRestoButtonTemplate } from '../view/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, resto }) {
    this._likeButtonContainer = likeButtonContainer;
    this._Resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._Resto;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const Resto = await FavoriteRestoIdb.getResto(id);
    return !!Resto;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestoButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this._Resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeRestoButtonTemplate();

    const likeButton = document.querySelector('#likedButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this._Resto.id);

      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
