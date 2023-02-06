Feature('Selectors');

Scenario('test any selectors',  ({ I }) => {
    I.amOnPage('/');
    pause();

    I.waitForVisible(locate('[class*="nav__scroll course-categories__nav-box"]').first());
    // I.click('//div[@class="button button_white button_white-inverse-transparent button_md-3 button_radius-md None"]');
    I.click('div[class*="transitional-main"] div[class*="button_white-inverse-transparent"]');
    // I.waitForClickable('//button[@class="header3__button-sign-in"]');
    // I.click('//button[@class="header3__button-sign-in"]');
    // I.click('//*[@data-tab-id="register"]');
    // I.fillField('input[name=fname][class*=new-input][class*=new-input_full]', 'testUsername');
    // I.fillField('form[class*="registration"] input[type="email"]', 'testEmail');
    // I.fillField('/html/body/div[2]/div/div/div/div[3]/div[3]/form/div[2]/div[1]/div[3]/div/input', 'testSecondName');


});
