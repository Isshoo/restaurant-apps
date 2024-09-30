import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../datas/resto-api';
import LikeButtonInitiator from '../../utility/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="resto" class="resto"></div>
      <div id="menus" class="menus"></div>
      <div id="reviews" class="reviews"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    // wait
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restoDetails = await RestoDbSource.getRestaurantDetails(url.id);
    const restoMenus = await RestoDbSource.getRestaurantMenus(url.id);
    const restoReviews = await RestoDbSource.getCustomerReviews(url.id);

    const restoContainer = document.querySelector('#resto');
    const menusContainer = document.querySelector('#menus');
    const reviewsContainer = document.querySelector('#reviews');

    const renderDetail = (restos) => {
      const restoItem = document.createElement('resto-detail');
      restoItem.restow = restos;

      restoContainer.innerHTML = '';
      restoContainer.append(restoItem);
    };

    const renderMenus = (restos) => {
      const restoItem = document.createElement('resto-menus');
      restoItem.restow = restos;

      menusContainer.innerHTML = '';
      menusContainer.append(restoItem);
    };

    const renderReviews = (restos) => {
      const restoList = restos.map((resto) => {
        const restoItem = document.createElement('resto-reviews');
        restoItem.restow = resto;
        return restoItem;
      });

      reviewsContainer.innerHTML = '';
      reviewsContainer.append(...restoList);
    };

    async function render() {
      renderDetail(restoDetails);
      renderMenus(restoMenus);
      renderReviews(restoReviews);
    }

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: restoDetails.id,
        name: restoDetails.name,
        description: restoDetails.description,
        city: restoDetails.city,
        address: restoDetails.address,
        pictureId: restoDetails.pictureId,
        categories: restoDetails.categories,
        foods: restoMenus.foods,
        drinks: restoMenus.drinks,
        rating: restoDetails.rating,
        customerReviews: restoReviews,
      },
    });

    render();
  },
};

export default Detail;
