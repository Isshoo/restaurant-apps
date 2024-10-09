import { createLikeRestoButtonTemplate, createUnlikeRestoButtonTemplate } from '../view/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteResto, resto }) {
    this._likeButtonContainer = likeButtonContainer;
    this._Resto = resto;
    this._favoriteResto = favoriteResto;

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
    const Resto = await this._favoriteResto.getResto(id);
    return !!Resto;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestoButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteResto.putResto(this._Resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeRestoButtonTemplate();

    const likeButton = document.querySelector('#likedButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteResto.deleteResto(this._Resto.id);

      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
