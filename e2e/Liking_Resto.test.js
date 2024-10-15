/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked resto', ({ I }) => {
  I.see('', '#resto-list');
});

Scenario('liking one resto', async ({ I }) => {
  I.see('', '#resto-list');

  I.amOnPage('/');

  I.waitForElement('.resto-info h3 a', 10);
  I.seeElement('.resto-info h3 a');
  const firstResto = locate('.resto-info h3 a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.seeElement('.swal2-container');
  I.click('.swal2-confirm');

  I.amOnPage('/#/favorite');
  I.waitForElement('.resto-card', 10);
  I.seeElement('.resto-card');
  const likedRestoTitle = await I.grabTextFrom('.resto-info h3');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});
