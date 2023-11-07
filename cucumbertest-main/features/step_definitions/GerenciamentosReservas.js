const { Given, When, Then } = require('cucumber');
const assert = require('assert');
let browser;
let page;

let mensagemDeConfirmacao;
let reservas = [];

Given('que estou logado na minha conta de usuário', async () => {
    // browser = await puppeteer.launch();
    // page = await browser.newPage();
    // await page.goto('http://localhost:3000/home');
});

Given('tenho uma reserva confirmada', () => {
    reservas = [
        { status: 'confirmada', sala: 'Sala 1', data: '2023-10-25' },
        { status: 'confirmada', sala: 'Sala 2', data: '2023-10-26' },
    ];
});

When('acesso a lista de reservas', () => {
    reservas.map((reserva, index) => {
        console.log(`Reserva ${index + 1}: Sala - ${reserva.sala}, Data - ${reserva.data}, Status - ${reserva.status}`); //simula as informações em tela
    });
});

When('escolho a opção de cancelar a reserva', () => {
    if (reservas.length > 0 && reservas[0].status === 'confirmada') {
        reservas[0].status = 'cancelada'; // Simula que cliente gostaria de cancelar a reserva na "sala 1"
        mensagemDeConfirmacao = 'Reserva cancelada com sucesso';
    } else {
        mensagemDeConfirmacao = 'Reserva não pode ser cancelada';
    }
});

Then('devo ver a mensagem de confirmação {string}', (confirmationMessage) => {
    assert.strictEqual(mensagemDeConfirmacao, confirmationMessage);
});

Given('que estou logado na minha conta de fornecedor', async () => {
    // browser = await puppeteer.launch();
    // page = await browser.newPage();
    // await page.goto('http://localhost:3001/home');
});

Given('tenho uma reserva pendente', () => {
    reservasPendentes.push({ status: 'pendente' }); // Simula uma reserva pendente
});

When('acesso a lista de reservas pendentes', () => {
    reservas.map((reserva, index) => {
        if (reserva.status === 'pendente') {
            console.log(`Reserva ${index + 1}: Sala - ${reserva.sala}, Data - ${reserva.data}, Status - ${reserva.status}`); //simula as informações em tela
        }
    });
});

When('escolho a opção de confirmar a reserva', () => {
    if (reservasPendentes.length > 0 && reservasPendentes[0].status === 'pendente') {
        reservasPendentes[0].status = 'confirmada'; // Simula a confirmação da primeira reserva da lista
        mensagemDeConfirmacao = 'Reserva confirmada com sucesso';
    } else {
        mensagemDeConfirmacao = 'Reserva não pode ser confirmada';
    }
});

Then('devo ver a mensagem de confirmação {string}', (confirmationMessage) => {
    assert.strictEqual(mensagemDeConfirmacao, confirmationMessage);
});
