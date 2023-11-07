 Feature: Gerenciamento de Reservas
     Como um usuário ou fornecedor
     Eu quero gerenciar minhas reservas de salas
     Para que eu possa cancelar ou confirmar reservas

     Scenario: Cancelamento de reserva
         Given que estou logado na minha conta de usuário
         And tenho uma reserva confirmada
         When acesso a lista de reservas
         And escolho a opção de cancelar a reserva
         Then devo ver a mensagem de confirmação "Reserva cancelada com sucesso"

     Scenario: Confirmação de reserva
         Given que estou logado na minha conta de fornecedor
         And tenho uma reserva pendente
         When acesso a lista de reservas pendentes
         And escolho a opção de confirmar a reserva
         Then devo ver a mensagem de confirmação "Reserva confirmada com sucesso"
