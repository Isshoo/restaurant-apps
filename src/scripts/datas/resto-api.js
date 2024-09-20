class RestoApi {
  static async getResto() {
    try {
      const response = await fetch("./data/DATA.json");
      const responseJson = await response.json();
      const data = responseJson.restaurants;

      console.log(data);
      return data;
    } catch (error) {
      throw new Error("error fetching");
    }
  }
}

export default RestoApi;
