import FavoriteRestoIdb from '../../datas/favorite-resto-idb';

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

    const render = (restos) => {
      const restoList = restos.map((resto) => {
        const restoItem = document.createElement('resto-item');
        restoItem.restow = resto;
        return restoItem;
      });

      restoContainer.innerHTML = '';
      restoContainer.append(...restoList);
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

    // NAVBAR (HARUS DIPINDAH KE DRAWER INITIATOR)
    const navList = document.querySelector('.nav-list');
    const navLink = document.querySelectorAll('.nav-link');
    const navToggle = document.querySelector('#nav-toggle');

    const linkAction = () => {
      navList.classList.remove('active');
    };
    navLink.forEach((n) => n.addEventListener('click', linkAction));

    const linkFocus = () => {
      navList.style.top = '-2rem';
    };
    navLink.forEach((n) => n.addEventListener('focus', linkFocus));

    const linkBlur = () => {
      navList.style.top = '';
    };
    navLink.forEach((n) => n.addEventListener('blur', linkBlur));

    navToggle.addEventListener('blur', () => {
      navList.classList.remove('active');
    });

    // NAVBAR

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
