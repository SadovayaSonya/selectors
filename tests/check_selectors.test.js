const { faker } = require('@faker-js/faker');

Feature('Selectors');

Scenario('Регистрация пользователя на OTUS',  ({ I }) => {
    const randomName = faker.name.firstName();
    const randomLastName = faker.name.lastName();
    const randomEmail = faker.internet.email(randomName, randomLastName);

    I.amOnPage('/');
    I.waitForVisible('//button[contains(@class,"sign-up")]');
    I.click('//button[contains(@class,"sign-up")]');
    I.waitForVisible('//div[@data-tab-id="register"]');
    I.click('//div[@data-tab-id="register"]');
    I.fillField('//input[@placeholder="Имя *"]', randomName);
    I.fillField('//input[@placeholder="Фамилия"]', randomLastName);
    I.fillField('//input[@placeholder="Электронная почта *"]', randomEmail);
    I.click('//button[contains(text(), "Зарегистрироваться")]');
    I.waitForVisible('//span[contains(@class, "user-info-name")]');
    I.see(randomName, '//span[contains(@class, "user-info-name")]' );
});
