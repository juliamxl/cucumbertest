const { Given, When, Then } = require('cucumber');
const assert = require('assert');
let browser;
let page;


let mensagemDeConfirmacao;
let usuarioLogado = false;
let salaEscolhida = null;

Given('que estou logado na minha conta de usuário', () => {
  usuarioLogado = true;
  // browser = await puppeteer.launch();
  // page = await browser.newPage();
  // await page.goto('http://localhost:3000/home');
});

When('eu escolho uma sala disponível em uma data e horário específicos', () => {
  if (usuarioLogado) {
    salaEscolhida = { sala: 'Sala 1', data: '2023-10-28', horario: '09:00' };
  }
});

When('clico no botão "Reservar"', () => {
  if (usuarioLogado && salaEscolhida) {
    mensagemDeConfirmacao = 'Reserva realizada com sucesso';
  } else {
    mensagemDeConfirmacao = 'Reserva não pode ser realizada';
  }
});

Then('devo ver a mensagem de confirmação {string}', (confirmationMessage) => {
  assert.strictEqual(mensagemDeConfirmacao, confirmationMessage);
});
