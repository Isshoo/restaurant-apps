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

function app() {
  return new App({
    button: document.querySelector('#nav-toggle'),
    drawer: document.querySelector('#nav-list'),
    content: document.querySelector('#mainContent'),
  });
}
document.addEventListener('DOMContentLoaded', () => {
  home();
  app();
});
