import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import "./components/footer-bar.js";
import "./components/header-bar.js";
import "./components/hero-section.js";
import "./components/explore-section.js";
import "./components/food-section.js";
import "./components/resto-item.js";
import home from "./view/home.js";

// === Show Menu === //
document.addEventListener("DOMContentLoaded", function () {
  home();
});
