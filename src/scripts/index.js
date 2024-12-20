import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';
import './components/footer-bar';
import './components/header-bar';
import './components/hero-section';
import './components/explore-section';
import './components/favorite-section';
import './components/food-section';
import './components/resto-item';
import './components/resto-detail';
import './components/resto-menus';
import './components/resto-reviews';
import './components/form-review';
import './components/res-loading';
import './components/skltn-item';
import './components/skltn-itemm';
import './components/skltn-detail';
import './components/skltn-menus';
import './components/skltn-reviews';
import './utility/navbar-tambahan';

import App from './view/app';
import swRegister from './utility/sw-register';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#nav-toggle'),
  drawer: document.querySelector('#nav-list'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
