import RestoApi from "../datas/resto-api.js";
import Utils from "../utility/utils.js";

const ambilDataResto = async () => {
  const dataResto = await RestoApi.getResto();
  return dataResto;
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
};

export { home };
