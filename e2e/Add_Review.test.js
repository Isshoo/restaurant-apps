/* eslint-disable no-undef */
const assert = require('assert');

Feature('Add a review');

Scenario('adding one new review', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.resto-info h3 a', 10);
  I.seeElement('.resto-info h3 a');
  const firstResto = locate('.resto-info h3 a').first();
  I.click(firstResto);

  I.waitForElement('#reviewForm', 10);
  I.seeElement('#reviewForm');

  I.fillField('#reviewForm div input[name=name]', 'John Doe');
  I.fillField('#reviewForm .desc-con textarea[name=description]', 'Enak!');
  I.click('#reviewForm button[type=submit]');

  I.waitForElement('.swal2-container', 10);
  I.seeElement('.swal2-container');
  I.click('.swal2-confirm');

  I.waitForElement('.review-item', 10);
  I.seeElement('.review-item');
  const addedReviewName = await I.grabTextFrom(locate('.review-item .review-name h3').first());
  const addedReviewDescription = await I.grabTextFrom(locate('.review-item .review-des p').first());
  assert.strictEqual(addedReviewName, 'John Doe');
  assert.strictEqual(addedReviewDescription, '" Enak! "');
});
