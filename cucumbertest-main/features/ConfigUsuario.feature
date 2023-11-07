 Feature: Gerenciamento de Perfil de Usuário
   Como um usuário
   Eu quero gerenciar meu perfil no sistema
   Para que eu possa atualizar minhas informações pessoais

   Scenario: Atualização de informações de usuário bem-sucedida
     Given que estou logado na minha conta de usuário
     When acesso o meu perfil de usuário
     And atualizo as informações pessoais
     And clico no botão "Salvar"
     Then devo ver a mensagem de confirmação "Informações atualizadas com sucesso"

   Scenario: Tentativa de atualização de informações inválidas
     Given que estou logado na minha conta de usuário
     When acesso o meu perfil de usuário
     And tento atualizar informações inválidas
     And clico no botão "Salvar"
     Then devo ver uma mensagem de erro
