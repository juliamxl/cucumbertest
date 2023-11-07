 Feature: Cadastro de Sala
   Como um fornecedor de sala
   Eu quero cadastrar minha sala no sistema
   Para que os usuários possam alugá-la

   Scenario: Cadastro de sala bem-sucedido
     Given que estou logado na minha conta de fornecedor
     When preencho o formulário de cadastro de sala com informações válidas
     And clico no botão "Cadastrar Sala"
     Then devo ver a mensagem de confirmação "Sala cadastrada com sucesso"

   Scenario: Cadastro de sala com informações incompletas
     Given que estou logado na minha conta de fornecedor
     When preencho o formulário de cadastro de sala com informações incompletas
     And clico no botão "Cadastrar Sala"
     Then devo ver uma mensagem de erro
