import API_ENDPOINT from '../globals/api-endpoint';
import Loading from '../utility/loading';

class RestoDbSource {
  static async listResto() {
    try {
      await Loading.restoList();
      const response = await fetch(API_ENDPOINT.LIST);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch {
      throw new Error('err');
    }
  }

  static async getRestaurantDetails(id) {
    try {
      await Loading.restoDetail();
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      const { restaurant } = responseJson;

      return {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        categories: restaurant.categories.map((category) => category.name),
        rating: restaurant.rating,
      };
    } catch {
      throw new Error('err');
    }
  }

  static async getRestaurantMenus(id) {
    try {
      await Loading.restoMenu();
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      const { restaurant } = responseJson;

      return {
        foods: restaurant.menus.foods.map((food) => food.name),
        drinks: restaurant.menus.drinks.map((drink) => drink.name),
      };
    } catch {
      throw new Error('err');
    }
  }

  static async getCustomerReviews(id) {
    try {
      await Loading.restoReview();
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      const { restaurant } = responseJson;
      const { customerReviews: reviews } = restaurant;

      return reviews;
    } catch {
      throw new Error('err');
    }
  }

  static async searchResto(query) {
    try {
      await Loading.restoList();
      const response = await fetch(API_ENDPOINT.SEARCH(query));
      const responseJson = await response.json();
      const { restaurants: restos } = responseJson;

      return restos;
    } catch {
      throw new Error('err');
    }
  }

  static async reviewResto(review) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: review.id,
          name: review.name,
          review: review.review,
        }),
      };
      await Loading.restoReview();
      const response = await fetch(API_ENDPOINT.REVIEW, options);
      const responseJson = await response.json();
      return responseJson.customerReviews;
    } catch {
      throw new Error('err');
    }
  }
}

export default RestoDbSource;
