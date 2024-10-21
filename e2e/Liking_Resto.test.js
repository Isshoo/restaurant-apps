/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.wait(2);
});

Scenario('showing empty liked resto', ({ I }) => {
  I.see('Tidak ada restoran yang disimpan sebagai favorit.', '#resto-list');
});

Scenario('liking one resto', async ({ I }) => {
  I.see('Tidak ada restoran yang disimpan sebagai favorit.', '#resto-list');

  I.amOnPage('/');
  I.wait(2);

  I.waitForElement('.resto-info h3 a', 10);
  I.seeElement('.resto-info h3 a');
  const firstResto = locate('.resto-info h3 a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.wait(2);
  I.waitForElement('.resto-card', 10);
  I.seeElement('.resto-card');
  const likedRestoTitle = await I.grabTextFrom('.resto-info h3');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});
