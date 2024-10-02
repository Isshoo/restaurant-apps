import FavoriteRestoIdb from '../datas/favorite-resto-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../view/templates/template-creator';

const LikeButtonInitiator = {
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
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this._Resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this._Resto.id);

      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
