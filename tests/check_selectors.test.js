Feature('Selectors');

Scenario('test any selectors',  ({ I }) => {
    I.amOnPage('/');
    I.
    I.waitForVisible('[class = transitional-main__event-button]');
    I.click('[class = transitional-main__event-button]');
    pause();

});
