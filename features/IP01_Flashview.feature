@test1
Feature: As a user,I open IPSA app check Flash view Tab

  Background: Open IPSA app and goto login page
    Given I am navigating to login page of IPSA

  @FrequentlyAskedQuestionPage @regression
  Scenario: As a user, I goto Frequently Asked Question website Popular
    Then I am on "¡Bienvenido al mundo digital del mercado de valores!" page
    When I click on cuenta de corretaje link
    Then I am on "¿Qué es una cuenta de corretaje?" page
    When I click on Preguntas frecuentes button
    Then I am on "PREGUNTAS FRECUENTES" website
    Then I click on back arrow

  @flashview @regression
  Scenario: As a user,I can able to click on Comunícate con nosotros tab
    Then I click on Do it later button
    Then I click on Comunícate con nosotros tab
    Then I click on Enviar correo tab
    Then I click on Solicitar cita tab
    Then I click on Seguirnos en Instagram tab

  @flashview @regression
  Scenario: As a user,I can able to click on Tasas de rendimiento tab
    Then I click on Do it later button
    Then I click on Tasas de rendimiento tab
    Then I scroll up and down
    Then I click on tooltip option
    Then I click on DOP tab
    Then I click on USD tab
    Then I click on Question mark
    Then I goto login page IPSA

  @flashview @regression
  Scenario: As a user,I can able to Calculate Monto a invertir with "<currency>" and "<amount>" and "<days>"
    Then I click on Do it later button
    Then I click on Calculadora Popular tab
    Then I select currency "<currency>"
    Then I enter amount "<amount>" in Monto a invertir field
    Then I enter days "<days>" in Cantidad de días field
    Then I enter continuar button
    Then I scroll up and down Calculadora Mutuos Popular page
    Then I click on tool tip of Calculadora Mutuos Popular page
    Then I click on Finalizar button
    Then I am on login page

    Examples:
      | currency | amount      | days |
      # | USD      | 50000000000 |  360 |
      # | DOP      |         -10 |    5 |
      | USD      |       60000 |  200 |
      # | DOP      |      750000 |    0 |
