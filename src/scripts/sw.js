import 'regenerator-runtime';
import CacheHelper from './utility/cache-helper';

// Daftar asset yang akan dicaching
const assetsToCache = [
  './',
  './icon/icons/restaurant-72.png',
  './icon/icons/restaurant-96.png',
  './icon/icons/restaurant-128.png',
  './icon/icons/restaurant-144.png',
  './icon/icons/restaurant-152.png',
  './icon/icons/restaurant-192.png',
  './icon/icons/restaurant-384.png',
  './icon/icons/restaurant-512.png',
  './index.html',
  './icon/favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
