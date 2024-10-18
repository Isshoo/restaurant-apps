/* eslint-disable no-undef */
const assert = require('assert');

Feature('Add a review');

Scenario('adding one new review', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.resto-info h3 a', 20);
  I.seeElement('.resto-info h3 a');
  const firstResto = locate('.resto-info h3 a').first();
  I.click(firstResto);

  I.waitForElement('#reviewForm div input', 20);
  I.seeElement('#reviewForm div input');
  I.fillField('#reviewForm div input[name=name]', 'Johnny Doe');

  I.waitForElement('#reviewForm .desc-con textarea', 20);
  I.seeElement('#reviewForm .desc-con textarea');
  I.fillField('#reviewForm .desc-con textarea[name=description]', 'The Foods are Recommended!');

  I.waitForElement('#reviewForm button', 20);
  I.seeElement('#reviewForm button');
  I.click('#reviewForm button[type=submit]');

  I.waitForElement('.swal2-container', 20); // Tambah waktu tunggu
  I.seeElement('.swal2-container');
  I.click('.swal2-confirm');

  I.waitForElement('.review-item', 20);
  I.seeElement('.review-item');
  const addedReviewName = (await I.grabTextFrom(locate('.review-item .review-name h3').first())).trim();
  const addedReviewDescription = (await I.grabTextFrom(locate('.review-item .review-des p').first())).trim();

  assert.strictEqual(addedReviewName, 'Johnny Doe'); // Bandingkan nama secara tepat
  assert.strictEqual(addedReviewDescription, '" The Foods are Recommended! "');
});
