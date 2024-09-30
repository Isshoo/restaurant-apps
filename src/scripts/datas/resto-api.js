import API_ENDPOINT from '../globals/api-endpoint';

class RestoDbSource {
  static async listResto() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getRestaurantDetails(id) {
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
  }

  static async getRestaurantMenus(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    const { restaurant } = responseJson;

    return {
      foods: restaurant.menus.foods.map((food) => food.name),
      drinks: restaurant.menus.drinks.map((drink) => drink.name),
    };
  }

  static async getCustomerReviews(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    const { restaurant } = responseJson;
    const { customerReviews: reviews } = restaurant;

    return reviews;
  }

  static async searchResto(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    const responseJson = await response.json();
    const { restaurants: restos } = responseJson;

    return restos;
  }

  static async reviewResto(resto) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: resto.id,
        name: resto.name,
        review: resto.review,
      }),
    };

    const response = await fetch(API_ENDPOINT.REVIEW, options);
    const responseJson = await response.json();
    return responseJson.customerReviews;
  }
}

export default RestoDbSource;
