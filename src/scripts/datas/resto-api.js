const endpoint = './data/DATA.json';

class RestoApi {
  static async getResto() {
    try {
      const response = await fetch(`${endpoint}`);
      const responseJson = await response.json();
      const data = responseJson.restaurants;

      console.log(data);
      return data;
    } catch (error) {
      throw new Error('error fetching');
    }
  }
}

export default RestoApi;
