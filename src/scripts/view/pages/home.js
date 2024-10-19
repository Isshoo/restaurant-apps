import RestoDbSource from '../../datas/resto-api';
import Loading from '../../utility/loading';

const Home = {
  async render() {
    return `
      <section id="home">
        <picture>
          <source 
            media="(max-width: 600px)" 
            srcset="./images/hero-image_2-small.jpg">
          <img
            src='./images/hero-image_2-large.jpg' 
            alt="Hero Image"
          >
        </picture>
        <hero-section></hero-section>
      </section>
      <section id="explore">
        <explore-section></explore-section>
      </section>
      <section id="food">
        <food-section></food-section>
      </section>
    `;
  },

  async afterRender() {
    const cat = document.querySelector('#cat');
    const explore = document.querySelector('#explore');

    cat.addEventListener('click', () => {
      explore.scrollIntoView({ behavior: 'smooth' });
    });

    const restoContainer = document.querySelector('#resto-list');

    const render = async (restos) => {
      const restoList = restos.map((resto) => {
        const restoItem = document.createElement('resto-item');
        restoItem.restow = resto;
        return restoItem;
      });
      await Loading.restoList();
      restoContainer.innerHTML = '';
      restoContainer.append(...restoList);

      if (restoContainer.innerHTML === '') {
        restoContainer.innerHTML = 'Tidak ada restoran untuk ditampilkan.';
      }
    };
    // RENDER

    const ambilDataResto = async () => {
      const dataResto = await RestoDbSource.listResto();
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
        const response = await RestoDbSource.listResto();
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
        const response = await RestoDbSource.listResto();
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
        const response = await RestoDbSource.searchResto(namaResto);

        render(response);
      };

      cariResto();
      searchForm.reset();
    });
    // SEARCH

    await ambilDataResto();
  },
};

export default Home;
