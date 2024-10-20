import FavoriteRestoIdb from '../../datas/favorite-resto-idb';
import Loading from '../../utility/loading';

const Favorite = {
  async render() {
    return `
      <section id="explore">
        <favorite-section></favorite-section>
      </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    // RENDER
    const restoContainer = document.querySelector('#resto-list');

    const render = async (restos) => {
      const restoList = restos.map((resto) => {
        const restoItem = document.createElement('resto-item');
        restoItem.restow = resto;
        return restoItem;
      });
      await Loading.delay();
      restoContainer.innerHTML = '';
      restoContainer.append(...restoList);

      if (restoContainer.innerHTML === '') {
        restoContainer.innerHTML = 'Tidak ada restoran yang disimpan sebagai favorit.';
      }
    };
    // RENDER

    const ambilDataResto = async () => {
      const dataResto = await FavoriteRestoIdb.getAllResto();
      render(dataResto);
    };

    // FILTER LIST
    const filterList = document.querySelectorAll('.filter-btn');
    const allList = document.getElementById('all-list');
    const ratingList = document.getElementById('by-rating');
    const cityList = document.getElementById('by-city');

    allList.addEventListener('click', (e) => {
      e.preventDefault();
      filterList.forEach((button) => {
        button.classList.remove('active');
      });
      allList.classList.add('active');
      ambilDataResto();
    });

    ratingList.addEventListener('click', (e) => {
      e.preventDefault();
      filterList.forEach((button) => {
        button.classList.remove('active');
      });
      ratingList.classList.add('active');

      const cariResto = async () => {
        const response = await FavoriteRestoIdb.getAllResto();
        const byRating = response.sort((a, b) => b.rating - a.rating);

        render(byRating);
      };

      cariResto();
    });

    cityList.addEventListener('click', (e) => {
      e.preventDefault();
      filterList.forEach((button) => {
        button.classList.remove('active');
      });
      cityList.classList.add('active');

      const cariResto = async () => {
        const response = await FavoriteRestoIdb.getAllResto();
        const byCity = response.sort((a, b) => a.city.localeCompare(b.city));

        render(byCity);
      };

      cariResto();
    });
    // FILTER LIST

    // SEARCH
    const searchForm = document.getElementById('searchForm');

    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const namaResto = e.target.elements.searchInput.value.toLowerCase();

      const cariResto = async () => {
        const response = await FavoriteRestoIdb.getAllResto();
        const hasil = response.filter((resto) => resto.name.toLowerCase().includes(namaResto));

        render(hasil);
      };

      cariResto();
      searchForm.reset();
    });
    // SEARCH

    await ambilDataResto();
  },
};

export default Favorite;
