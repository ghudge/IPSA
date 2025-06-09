@regression
Feature: As a user,I goto Profile section

  Background: Open IPSA app and goto login page
    Given I am navigating to login page of IPSA
    Then I click on Do it later button
    When I click on Inisior sesion
    Then I enter user "00300583317"
    Then I enter password "Abcd@1234"
    Then I click on iniciar sesion button
    When I click on Ahora no button
    Then I am on home page of app

  @Profile_IPSA @regression
  Scenario: I goto profile icon and access all tabs
    When I click on application website
    Then I goto home page of app
    When I click on profile icon
    Then I click on Mi perfil
    Then I close popup
    Then I click on Documentos importantes
    Then I click on Términos y condiciones
    Then I scroll upto end of the page
    Then I click on 2 times back arrow
    Then I click on Desvincular dispositivo
    Then I close popup
    Then I click on Configuraciones
    Then I click on Cambiar mi contraseña
    Then I click on 2 times back arrow

  @logout_IPSA @regression
  Scenario: I goto profile and logout application
    When I click on profile icon
    Then I click on Salir button
    Then I click on Cerrar sesión
    Then I click on burger menu
    Then I click on Desvincular usuario option
    Then I click on Desvincular button
    # Then I am on login page of IPSA app
