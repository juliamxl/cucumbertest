Feature: Login de Usuário
  Como um usuário registrado
  Eu quero fazer login no sistema
  Para acessar minha conta

  Scenario: Login bem-sucedido
    Given que estou na página de login
    When preencho o campo "Email" com "usuario@exemplo.com"
    And preencho o campo "Senha" com "SenhaCorreta"
    And clico no botão "Entrar"
    Then devo ser redirecionado para a página inicial
    And devo ver a mensagem de boas-vindas "Bem-vindo, Usuário!"

   Scenario: Tentativa de login com credenciais inválidas
     Given que estou na página de login
     When preencho o campo "Email" com "usuario@exemplo.com"
     And preencho o campo "Senha" com "SenhaIncorreta"
     And clico no botão "Entrar"
     Then devo ver uma mensagem de erro "Credenciais inválidas"
     And não devo ser redirecionado para a página inicial
