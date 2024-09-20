import RestoApi from "../datas/resto-api.js";
import Utils from "../utility/utils.js";

const ambilDataResto = async () => {
  const dataResto = await RestoApi.getResto();
  render(dataResto);
};

//RENDER
const restoContainer = document.querySelector("#resto-list");

const render = (restos) => {
  const restoList = restos.map((resto) => {
    const restoItem = document.createElement("resto-item");
    restoItem.resto = resto;
    return restoItem;
  });

  Utils.emptyElement(restoContainer);
  restoContainer.append(...restoList);
};

const home = () => {
  ambilDataResto();

  //NAVBAR
  const navList = document.querySelector(".nav-list");
  document.querySelector("#nav-toggle").addEventListener("click", () => {
    navList.classList.toggle("active");
  });

  const navLink = document.querySelectorAll(".nav-link");
  const linkAction = () => {
    navList.classList.remove("active");
  };
  navLink.forEach((n) => n.addEventListener("click", linkAction));

  const navToggle = document.querySelector("#nav-toggle");
  document.addEventListener("click", function (e) {
    if (!navList.contains(e.target) && !navToggle.contains(e.target)) {
      navList.classList.remove("active");
    }
  });

  //SEARCH
  const searchForm = document.getElementById("searchForm");

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const namaResto = e.target.elements.searchInput.value.toLowerCase();

    const cariResto = async () => {
      const response = await RestoApi.getResto(namaResto);
      const hasil = response.filter((resto) => {
        return resto.name.toLowerCase().includes(namaResto);
      });
      render(hasil);
    };

    cariResto();
    searchForm.reset();
  });
};

export { home, ambilDataResto };
