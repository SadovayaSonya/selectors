Feature('Selectors');

Scenario('test any selectors',  ({ I }) => {
    I.amOnPage('/');
    I.waitForVisible(locate('[class = transitional-main__event-button]').at(1));
    I.click('[class = transitional-main__event-button]');
    pause();

});
