const { Given, When, Then } = require('cucumber');
const assert = require('assert');
let browser;
let page;


function validarObjetoPreenchido(objeto) {
    for (const chave in objeto) {
        if (!objeto[chave]) {
            return false;
        }
    }
    return true;
}

let formularioSalaSimulado = {};
let mensagemDeConfirmacao;

Given('que estou logado na minha conta de fornecedor', async () => {
    // browser = await puppeteer.launch();
    // page = await browser.newPage();
    // await page.goto('http://localhost:3000/home');
});

When('preencho o formulário de cadastro de sala com informações válidas', () => {
    formularioSalaSimulado = {
        nomeSala: 'Sala de Reunião 1',
        capacidade: '10',
        descricao: 'Sala de reunião bem equipada',
        precoPorHora: '50',
    };
});

When('clico no botão {string}', (buttonText) => {
    const todosAtributosPreenchidos = validarObjetoPreenchido(formularioSalaSimulado);

    if (todosAtributosPreenchidos === true) {
        mensagemDeConfirmacao = 'Sala cadastrada com sucesso';
    } else {
        mensagemDeConfirmacao = 'Sala não pode ser cadastrada com sucesso';
    }
});

Then('devo ver a mensagem de confirmação {string}', (confirmationMessage) => {
    assert.strictEqual(mensagemDeConfirmacao, confirmationMessage);
});

When('tento preencher o formulário de cadastro de sala com informações inválidas', () => {
    formularioSalaSimulado = {
        nomeSala: '', // Nome em branco é inválido
        capacidade: '', 
        descricao: 'Sala de reunião bem equipada',
        precoPorHora: '50',
    };

    const todosAtributosPreenchidos = validarObjetoPreenchido(formularioSalaSimulado);

    if (todosAtributosPreenchidos === false) {
        mensagemDeConfirmacao = 'Falha no cadastro: Informações inválidas';
    } 
});


Then('devo ver uma mensagem de erro {string}', (errorMessage) => {
    assert.strictEqual(mensagemDeConfirmacao, errorMessage);
});






