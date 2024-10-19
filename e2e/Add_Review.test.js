/* eslint-disable no-undef */
const assert = require('assert');

Feature('Add a review');

Scenario('adding one new review', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.resto-info h3 a', 20);
  I.seeElement('.resto-info h3 a');
  const firstResto = locate('.resto-info h3 a').first();
  I.click(firstResto);

  I.waitForElement('#reviewForm', 20);
  I.seeElement('#reviewForm .name-con #name');
  I.click('#reviewForm .name-con #name');
  I.clearField('#reviewForm .name-con #name');
  I.wait(1);
  I.fillField('#reviewForm .name-con #name', 'John Doe');

  I.seeElement('#reviewForm .desc-con #description');
  I.click('#reviewForm .desc-con #description');
  I.clearField('#reviewForm .desc-con #description');
  I.fillField('#reviewForm .desc-con #description', 'The Foods are Recommended!');

  I.seeElement('#reviewForm #reviewSubmit');
  I.click('#reviewForm #reviewSubmit');

  I.waitForElement('.swal2-container', 20);
  I.seeElement('.swal2-container');
  I.click('.swal2-confirm');

  I.waitForElement('.review-item', 20);
  I.seeElement('.review-item');
  const addedReviewName = await I.grabTextFrom(locate('.review-item .review-name h3').first());
  const addedReviewDescription = await I.grabTextFrom(locate('.review-item .review-des p').first());

  assert.strictEqual(addedReviewName, 'John Doe');
  assert.strictEqual(addedReviewDescription, '" The Foods are Recommended! "');
});
