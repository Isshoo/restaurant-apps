import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import './components/footer-bar';
import './components/header-bar';
import './components/hero-section';
import './components/explore-section';
import './components/food-section';
import './components/resto-item';
import home from './view/home';

document.addEventListener('DOMContentLoaded', () => {
  home();
});
