import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../datas/resto-api';
import LikeButtonInitiator from '../../utility/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="resto" class="resto"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    // wait
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoDbSource.detailResto(url.id);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        city: resto.city,
        address: resto.address,
        pictureId: resto.pictureId,
        categories: resto.categories,
        menus: resto.menus,
        rating: resto.rating,
        customerReviews: resto.customerReviews,
      },
    });
  },
};

export default Detail;
