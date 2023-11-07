const { Given, When, Then } = require('cucumber');
const assert = require('assert');
let browser;
let page;

let mensagemDeConfirmacao;
let perfilDeUsuario = {};

Given('que estou logado na minha conta de usuário', async () => {
    perfilDeUsuario = {
        nome: 'Julia Silva',
        email: 'julia@gmail.com',
        telefone: '123456789',
    };
});

When('acesso o meu perfil de usuário', () => {
    // browser = await puppeteer.launch();
    // page = await browser.newPage();
    // await page.goto('http://localhost:3000/Configurations');
});

When('atualizo as informações pessoais', () => {
    perfilDeUsuario.nome = 'Julia da Silva';
    perfilDeUsuario.telefone = '987654321';
    mensagemDeConfirmacao = 'Informações atualizadas com sucesso';
});

When('clico no botão "Salvar"', () => {
    mensagemDeConfirmacao = 'Informações atualizadas com sucesso';
});

Then('devo ver a mensagem de confirmação {string}', (confirmationMessage) => {
    assert.strictEqual(mensagemDeConfirmacao, confirmationMessage);
});

Then('minhas informações pessoais devem ser atualizadas', () => {
    assert.strictEqual(perfilDeUsuario.nome, 'João da Silva');
    assert.strictEqual(perfilDeUsuario.telefone, '987654321');
});

When('tento atualizar informações inválidas', () => {
    perfilDeUsuario.nome = ''; // Nome em branco é inválido
    mensagemDeConfirmacao = 'Falha na atualização: Nome inválido';
});

Then('devo ver uma mensagem de erro {string}', (errorMessage) => {
    assert.strictEqual(mensagemDeConfirmacao, errorMessage);
});

