/* eslint-disable no-undef */
Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked resto', ({ I }) => {
  I.seeElement('#searchForm');
  I.see('', '#resto-list');
});
