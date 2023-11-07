 Feature: Cadastro de Usuário
   Como um usuário
   Eu quero me cadastrar no sistema
   Para que eu possa fornecer ou alugar salas

   Scenario: Cadastro de usuário bem-sucedido
     Given que estou na página de cadastro
     When preencho o formulário de cadastro com informações válidas
     And clico no botão "Cadastrar"
     Then devo ver a mensagem de confirmação "Cadastro realizado com sucesso"

   Scenario: Cadastro de usuário com informações inválidas
     Given que estou na página de cadastro
     When preencho o formulário de cadastro com informações inválidas
     And clico no botão "Cadastrar"
     Then devo ver uma mensagem de erro
