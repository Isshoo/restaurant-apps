import Swal from 'sweetalert2';
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
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Gagal menampilkan list restoran!',
      });
      return console.log('Gagal menampilkan list restoran!');
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
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Gagal mendapatkan detail restoran!',
      });
      return console.log('Gagal mendapatkan detail restoran!');
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
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Gagal mendapatkan informasi menu restoran!',
      });
      return console.log('Gagal mendapatkan informasi menu restoran!');
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
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Gagal menampilkan reviews customer!',
      });
      return console.log('Gagal menampilkan reviews customer!');
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
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Gagal mendapatkan restoran!',
      });
      return console.log('Gagal mendapatkan restoran!');
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

      Swal.fire({
        title: `${responseJson.message}`,
        icon: 'success',
        text: 'Berhasil menambahkan review!',
      });

      return responseJson.customerReviews;
    } catch {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Gagal menambahkan review!',
      });
      return console.log('Gagal menambahkan review!');
    }
  }
}

export default RestoDbSource;
