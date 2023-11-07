const { Given, When, Then } = require('cucumber');
const puppeteer = require('puppeteer');
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
  

let formularioSimulado = {}
let mensagemDeConfirmacao;

Given('que estou na página de cadastro', async function () {
    // browser = await puppeteer.launch();
    // page = await browser.newPage();
    // await page.goto('http://localhost:3000/login');
  });


When('preencho o formulário de cadastro com informações válidas', () => {
    formularioSimulado = {
        nome: 'Julia Marçal',
        email: 'julia@gmail.com',
        senha: 'MinhaSenha123',
        telefone: '46999094941'
    };
});

When('clico no botão {string}', (buttonText) => {
    const todosAtributosPreenchidos = validarObjetoPreenchido(formularioSimulado);

    if(todosAtributosPreenchidos === true){
        mensagemDeConfirmacao = 'Cadastro realizado com sucesso';
    }else {
        mensagemDeConfirmacao = 'Cadastro não pode ser realizado com sucesso';
    }
    
});

// Then('devo ver a mensagem de confirmação {string}', (confirmationMessage) => {
//     assert.strictEqual(mensagemDeConfirmacao, confirmationMessage);
// });
