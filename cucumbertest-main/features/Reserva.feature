 Feature: Reserva de Sala
   Como um usuário
   Eu quero reservar uma sala para uso temporário
   Para que eu possa ter um local para trabalho ou reuniões

   Scenario: Reserva de sala bem-sucedida
     Given que estou logado na minha conta de usuário
     When eu escolho uma sala disponível em uma data e horário específicos
     And clico no botão "Reservar"
    Then devo ver a mensagem de confirmação "Reserva realizada com sucesso"

   Scenario: Tentativa de reserva malsucedida
     Given que estou logado na minha conta de usuário
     When eu escolho uma sala que não está disponível na data e horário desejados
     And clico no botão "Reservar"
     Then devo ver uma mensagem de erro informando que a sala não pôde ser reservada

