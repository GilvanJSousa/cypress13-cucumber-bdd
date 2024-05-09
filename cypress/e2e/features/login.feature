Feature: 1.000 - Validações de Login
  Como um usuario do site Sabesp
  Cliente quer completar o login
  Para que tenha a validação das funcionalidades de usuario

  Scenario: 1.001 - Login com sucesso
    Given que o cliente realizou o login
    When inseriu CPF e senha
    Then O sistema deverá direcionar para home logada