import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import "./components/footer-bar.js";
import "./components/header-bar.js";
import "./components/hero-section.js";
import "./components/restaurant.js";
import "./view/home.js";

// === Show Menu === //
const navList = document.querySelector(".nav-list");

document.querySelector("#nav-toggle").addEventListener("click", () => {
  navList.classList.toggle("active");
});

// === REMOVE MENU MOBILE === //
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
