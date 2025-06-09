@regression
Feature: As a user,I goto CTA Dashboard

  Background: Open IPSA app and goto login page
    Given I am navigating to login page of IPSA
    Then I click on Do it later button
    When I click on Inisior sesion
    Then I enter user "00300583317"
    Then I enter password "Abcd@1234"
    Then I click on iniciar sesion button
    When I click on Ahora no button
    Then I am on home page of app

  @CTA_Dashboard @regression
  Scenario: Goto Which instruments are for you option
    Then I swipe up ¿Cuáles instrumentos son para ti option
    Then I select instrumentos "<typeI>"
    Then I sub type if instrumentos "<stype>"
    Then I am on "<stype>" Page
    Then I click on Quiero invertir button
    Then I enter Comentario "Buen"
    Then I click Enviar button
    Then I click on Finalizar of Listo page
    Then I am on home page of app

    Examples:
      | typeI          | stype              |
      | Corto plazo    | Mutuos Popular     |
      | Renta fija     | Bonos Corporativos |
      | Renta fija     | Bonos GOB          |
      | Renta variable | Acciones           |
      | Renta variable | Fideicomisos       |
      | Renta variable | Fondos Cerrados    |
