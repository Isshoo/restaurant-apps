import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';
import './components/footer-bar';
import './components/header-bar';
import './components/hero-section';
import './components/explore-section';
import './components/food-section';
import './components/resto-item';
import home from './view/home';
import App from './view/app';

const app = new App({
  button: document.querySelector('#nav-toggle'),
  drawer: document.querySelector('#nav-list'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
  home();
});

window.addEventListener('load', () => {
  app.renderPage();
  home();
});

document.addEventListener('DOMContentLoaded', () => {
  home();
});
