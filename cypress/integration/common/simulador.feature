# Comment
@tag
Feature: Simulação e contratação de seguro de vida da SulAmérica

    Como usuario, desejo utilizar o simulador para cotar o seguro de vida
Scenario: Simular uma contratação de seguro de vida     
    Given que eu acesso a pagina da sulAmerica
    And desejo simular a contratação do seguro de vida
    When informo meus dados: "nome completo", "data de nascimento" e "ocupacao"
    And clicar em próximo
    Then deve seguir para à página formas de contato

    Given estou na página de forma de contato
    And selecionar E-mail 
    When informar meu "email" e marcar o checkbox de autorização 
    And clicar em encontar meu seguro
    Then deve seguir para à página personaliar seguro 