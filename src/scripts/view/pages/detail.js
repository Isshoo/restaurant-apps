import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../datas/resto-api';
import LikeButtonPresenter from '../../utility/like-button-presenter';
import Utils from '../../utility/utils';
import FavoriteRestoIdb from '../../datas/favorite-resto-idb';
import Loading from '../../utility/loading';

const Detail = {
  async render() {
    return `
    <section id="detailContainer">
     <div id="restoDetail">
      <div id="resto" class="resto">
        <skltn-detail></skltn-detail>
      </div>
      <div id="menus" class="menus">
        <skltn-menus></skltn-menus>
      </div>
      <div id="reviewContainer">
       <form-review></form-review>
       <div id="reviews" class="reviews">
        <skltn-reviews></skltn-reviews>
        <skltn-reviews></skltn-reviews>
        <skltn-reviews></skltn-reviews>
        <skltn-reviews></skltn-reviews>
       </div>
      </div>
      <div id="likeButtonContainer"></div>
     </div>
    </section>
    `;
  },

  async afterRender() {
    // RENDER
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restoDetails = await RestoDbSource.getRestaurantDetails(url.id);
    const restoMenus = await RestoDbSource.getRestaurantMenus(url.id);
    const restoReviews = await RestoDbSource.getCustomerReviews(url.id);

    const restoContainer = document.querySelector('#resto');
    const menusContainer = document.querySelector('#menus');
    const reviewsContainer = document.querySelector('#reviews');
    const formContainer = document.querySelector('form-review');

    const renderDetail = async (restos) => {
      const restoItem = document.createElement('resto-detail');
      restoItem.restow = restos;

      await Loading.delay();
      restoContainer.innerHTML = '';
      restoContainer.append(restoItem);
    };

    const renderMenus = async (restos) => {
      const restoItem = document.createElement('resto-menus');
      restoItem.restow = restos;

      await Loading.delay();
      menusContainer.innerHTML = '';
      menusContainer.append(restoItem);
      formContainer.style.display = 'block';
    };

    const renderReviews = async (restos) => {
      const restoList = restos.map((resto) => {
        const restoItem = document.createElement('resto-reviews');
        restoItem.restow = resto;
        return restoItem;
      });

      const restoNewest = restoList.sort((a, b) => {
        const dateA = Utils.parseDate(a.restow.date);
        const dateB = Utils.parseDate(b.restow.date);

        if (dateB - dateA === 0) {
          return restoList.indexOf(b) - restoList.indexOf(a);
        }

        return dateB - dateA;
      });

      await Loading.delay();
      reviewsContainer.innerHTML = '';
      reviewsContainer.append(...restoNewest);
    };

    renderDetail(restoDetails);
    renderMenus(restoMenus);

    const tampilkanReviews = async () => {
      try {
        const restoReview = await RestoDbSource.getCustomerReviews(url.id);

        renderReviews(restoReview);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    await tampilkanReviews();

    // ADD REVIEW
    const formNewReview = document.getElementById('reviewForm');
    formNewReview.addEventListener('submit', (event) => {
      event.preventDefault();

      const { id } = restoDetails;
      const name = document.getElementById('name').value;
      const review = document.getElementById('description').value;
      const date = Utils.generateCreatedAt();

      const newReview = Utils.makeReview(id, name, review, date);

      RestoDbSource.reviewResto(newReview).then(async () => {
        await RestoDbSource.getCustomerReviews(url.id);
        tampilkanReviews();
      });
      // console.log(newReview);
      formNewReview.reset();
    });

    // ADD REVIEW

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriteRestoIdb,
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
  },
};

export default Detail;
