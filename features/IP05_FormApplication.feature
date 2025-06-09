@regression
Feature: Filling Contáctanos form for user

  @Form_application_registracepage @regression
  Scenario: Open application and fill Contáctanos form
    When I am on Regístrate gratis y comienza a invertir page
    Then I click on Hazte inversionista button
    Then I am on ¡En Inversiones Popular te leemos! page
    Then I click on Contáctanos button
    Then I am on Contáctanos Page to fill form
    Then I enter name "Maria Fernanda" in Nombre field
    Then I enter last name "Fernandez Moya" in Apellido field
    Then I select Document type "Documento de identidad" in  Tipo de documento field
    Then I enter Document number in "00334548575" in Número de documento field
    Then I click on Continuar button
    Then I am on Contacto tab
    Then I enter phone number "8093458798" in Número de celular field
    Then I enter email "martin23@gmail.com" in Correo electrónico personal field
    Then I select contacto "Correo electrónico" in Forma de contacto field
    Then I click on Continuar button
    Then I select Topic of interest "Realizar una sugerencia" in Tema de interés
    Then I enter comment "Buen" in Comentario field
    Then I click on Continuar button
    Then I wait for next page

@Form_application_loginpage @regression
   Scenario: Open application and fill Contáctanos form
    Given I am navigating to login page of IPSA
    Then I click on Do it later button
    Then I click on Hazte inversionista button
    Then I am on Contáctanos Page to fill form
    Then I enter name "Maria Fernanda" in Nombre field
    Then I enter last name "Fernandez Moya" in Apellido field
    Then I select Document type "Documento de identidad" in  Tipo de documento field
    Then I enter Document number in "00334548575" in Número de documento field
    Then I click on Continuar button
    Then I am on Contacto tab
    Then I enter phone number "8093458798" in Número de celular field
    Then I enter email "martin23@gmail.com" in Correo electrónico personal field
    Then I select contacto "Correo electrónico" in Forma de contacto field
    Then I click on Continuar button
    Then I select Topic of interest "Quiero invertir" in Tema de interés
    Then I enter comment "Buen" in Comentario field
    Then I click on Continuar button
    Then I wait for next page