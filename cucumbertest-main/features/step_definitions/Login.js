const { Given, When, Then } = require('cucumber');
const puppeteer = require('puppeteer');
const assert = require('assert');

let browser;
let page;


Given('que estou na página de login', async function () {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/login');
});


When('preencho o campo {string} com {string}', async function (fieldName, value) {
    await page.waitForSelector(`input[name="${fieldName}"]`);
    await page.type(`input[name="${fieldName}"]`, value);
});



When('clico no botão {string}', async function (buttonText) {
    await page.click('button', { text: buttonText });
});

Then('devo ser redirecionado para a página inicial', function () {
    const currentURL = page.url();
    assert.strictEqual(currentURL, 'http://localhost:3000/home'); 
});

Then('devo ver a mensagem de boas-vindas {string}', async function (string) {
    const messageElement = await page.$('.mensagem-de-boas-vindas'); 
    const messageText = await page.evaluate(el => el.textContent, messageElement);
    assert.strictEqual(messageText, welcomeMessage);
});



